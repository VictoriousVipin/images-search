import React from "react";
import App from "../App.component";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "core-js/stable";
import "regenerator-runtime/runtime";

let container = null;
const records = {
  total: 10000,
  total_pages: 1000,
  results: [
    {
      id: "_WuPjE-MPHo",
      created_at: "2018-04-23T10:12:42-04:00",
      updated_at: "2021-04-30T02:03:20-04:00",
      promoted_at: "2018-04-24T23:02:35-04:00",
      width: 7442,
      height: 4961,
      color: "#d9d9f3",
      blur_hash: "LkH{4:R.ROj[?dWEo#j[-?R+offR",
      description:
        "Entering the Taj Mahal at the sunrise… The view was breathtaking!",
      alt_description: "photo of Taj Mahal",
      urls: {
        raw:
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjY5MTJ8MHwxfHNlYXJjaHwxfHxpbmRpYXxlbnwwfHx8fDE2MTk4MDk5NzU\u0026ixlib=rb-1.2.1",
        full:
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMjY5MTJ8MHwxfHNlYXJjaHwxfHxpbmRpYXxlbnwwfHx8fDE2MTk4MDk5NzU\u0026ixlib=rb-1.2.1\u0026q=85",
        regular:
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMjY5MTJ8MHwxfHNlYXJjaHwxfHxpbmRpYXxlbnwwfHx8fDE2MTk4MDk5NzU\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
        small:
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMjY5MTJ8MHwxfHNlYXJjaHwxfHxpbmRpYXxlbnwwfHx8fDE2MTk4MDk5NzU\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
        thumb:
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxMjY5MTJ8MHwxfHNlYXJjaHwxfHxpbmRpYXxlbnwwfHx8fDE2MTk4MDk5NzU\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
      },
      links: {
        self: "https://api.unsplash.com/photos/_WuPjE-MPHo",
        html: "https://unsplash.com/photos/_WuPjE-MPHo",
        download: "https://unsplash.com/photos/_WuPjE-MPHo/download",
        download_location:
          "https://api.unsplash.com/photos/_WuPjE-MPHo/download?ixid=MnwxMjY5MTJ8MHwxfHNlYXJjaHwxfHxpbmRpYXxlbnwwfHx8fDE2MTk4MDk5NzU",
      },
      categories: [],
      likes: 1010,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      user: {
        id: "Hd5tvDeIzu0",
        updated_at: "2021-04-27T10:51:36-04:00",
        username: "littlej1428",
        name: "Julian Yu",
        first_name: "Julian",
        last_name: "Yu",
        twitter_username: null,
        portfolio_url: "http://wanderinglass.com",
        bio:
          "An Actuary, An Enthusiastic Photographer, An Marathon Runner and A Dog Daddy.",
        location: "Hong Kong",
        links: {
          self: "https://api.unsplash.com/users/littlej1428",
          html: "https://unsplash.com/@littlej1428",
          photos: "https://api.unsplash.com/users/littlej1428/photos",
          likes: "https://api.unsplash.com/users/littlej1428/likes",
          portfolio: "https://api.unsplash.com/users/littlej1428/portfolio",
          following: "https://api.unsplash.com/users/littlej1428/following",
          followers: "https://api.unsplash.com/users/littlej1428/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1524375077604-e2fe81639906?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
          medium:
            "https://images.unsplash.com/profile-1524375077604-e2fe81639906?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
          large:
            "https://images.unsplash.com/profile-1524375077604-e2fe81639906?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
        },
        instagram_username: "Littlej1428",
        total_collections: 0,
        total_likes: 0,
        total_photos: 2,
        accepted_tos: false,
        for_hire: false,
      },
      tags: [],
    },
  ],
};

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

describe("AppComponent", () => {
  it("Should render the search button", () => {
    const { getByText } = render(<App />);
    expect(getByText("Search")).toBeTruthy();
  });

  it("Should render the input field", () => {
    const { getByPlaceholderText } = render(<App />);
    expect(getByPlaceholderText("Search for images")).toBeTruthy();
  });

  it("Should not render the images before search", () => {
    render(<App />, container);
    expect(container.querySelector(".img-div")).toBe(null);
  });

  it("Should call the API when search button is clicked", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(records),
      })
    );
    const { getByText } = render(<App />, container);
    await waitFor(() => {
      fireEvent(
        getByText("Search"),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
    });
  });

  it("Should not load images when API call gets 0 search result", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [],
          }),
      })
    );
    const { getByText } = render(<App />, container);
    fireEvent(
      getByText("Search"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    const img = await waitFor(() => container.querySelector(".img-div"));
    expect(img).toBe(null);
  });

  it("Should not load images when API gets failed", async () => {
    global.fetch = jest.fn(() => Promise.reject({}));
    const { getByText, getByPlaceholderText } = render(<App />, container);
    fireEvent.change(getByPlaceholderText("Search for images"), {
      target: { value: "india" },
    });
    fireEvent(
      getByText("Search"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    const img = await waitFor(() => container.querySelector(".img-div"));
    expect(img).toBe(null);
  });

  it("Should call the API on scroll event", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(records),
      })
    );
    const { getByText, getByPlaceholderText } = render(<App />, container);
    fireEvent.change(getByPlaceholderText("Search for images"), {
      target: { value: "india" },
    });
    await waitFor(() => {
      fireEvent(
        getByText("Search"),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
    });
    await waitFor(() => {
      fireEvent(
        getByText("Search"),
        new MouseEvent("scroll", {
          bubbles: true,
          cancelable: true,
        })
      );
    });
  });
});
