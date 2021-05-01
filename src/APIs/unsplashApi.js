import CONSTANTS from '../Config/constant';

const getImages = function(searchText, page) {
    const apiUrl = CONSTANTS.API_BASE_URL + "/search/photos?query=" + searchText + '&page=' + page;
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            Authorization: `Client-ID ${CONSTANTS.API_ACCESS_KEY}`,
        }
    });
}

export default getImages;