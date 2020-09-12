import { useState } from "react";
import Axios from "axios";
const useFetchStreams = (keyword, defaultValue) => {
  const [data, setData] = useState(defaultValue);
  const [error, setError] = useState(null);
  Axios.get(`/api/stream/search/${keyword}`)
    .then((data) => {
      setData(data.data.data);
    })
    .catch((err) => {
      setError(err);
    });
  return [data, error];
};
export default useFetchStreams;
