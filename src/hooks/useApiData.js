import { useState, useEffect } from "react";
import Axios from "axios";

export default function useApiData(url) {
  const [results, setResults] = useState([]);

  const getData = async () => {
    const response = await Axios.get(url);
    const items = response.data.results;
    setResults(items);
  };

  useEffect(() => {
    getData();
  }, []);

  return [results];
}
