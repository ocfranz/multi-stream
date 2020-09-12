import Axios from "axios";
/**
 * Fetch streams by a keyword
 * @param {string} keyword
 * @param {function} _callback
 */
const getStreamsByKeyword = (keyword, _callback) => {
  Axios.get(`/api/stream/search/${keyword}`)
    .then((data) => {
      _callback(data.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getStreamsByKeyword };
