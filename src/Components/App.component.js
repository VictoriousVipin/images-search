import React from "react";
import getImages from "../APIs/unsplashApi";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      searchText: "",
      page: 1,
      searchFlag: false,
    };
    this.timer = null;
    this.noMoreResult = false;
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  onSearchSubmit = (e) => {
    e.preventDefault();
    this.setState({ page: 1, images: [] }, () => {
      this.timer = null;
      this.noMoreResult = false;
      this.fetchImages();
    });
  };

  fetchImages = () => {
    const response = getImages(this.state.searchText, this.state.page);
    response
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length) {
          this.setState({
            images: [...this.state.images, ...data.results],
            searchFlag: true,
          });
        } else {
          if (!this.state.images.length) {
            this.setState({ searchFlag: true });
          }
          this.noMoreResult = true;
        }
      })
      .catch((e) => {
        this.noMoreResult = true;
      });
  };

  handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >
        document.documentElement.offsetHeight - 10 &&
      this.state.searchText &&
      this.state.images.length &&
      !this.noMoreResult
    ) {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        this.setState(
          {
            page: this.state.page + 1,
          },
          () => {
            this.fetchImages();
          }
        );
      }, 200);
    }
  };

  render() {
    return (
      <div className="search-container">
        <div className="search-segment">
          <form
            className="search-form"
            onSubmit={(e) => this.onSearchSubmit(e)}
          >
            <div className="search-field">
              <input
                type="text"
                value={this.state.term}
                onChange={(e) =>
                  this.setState({
                    searchText: e.target.value,
                    searchFlag: false,
                  })
                }
                placeholder="Search for images"
              />
              <button>Search</button>
            </div>
          </form>
        </div>
        <div className="image-list">
          {this.state.images.length
            ? this.state.images.map((image, i) => (
                <div className="img-div" key={image.id + "" + i}>
                  <img src={image.urls.regular} alt={image.description} />
                </div>
              ))
            : this.state.searchText &&
              this.state.searchFlag && (
                <div className="no-search-result">
                  No search result for
                  <strong> "{this.state.searchText}"</strong>
                </div>
              )}
        </div>
      </div>
    );
  }
}

export default App;
