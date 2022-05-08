import { useState, useEffect } from "react";
import grid from "./utils";
import paginate from "./utils";

const url="https://api.github.com/search/repositories?q=language:Javascript";
export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getDetails = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setData(grid(data.items));
    setLoading(false);
  };

  useEffect(() => {
    getDetails();
  }, []);
  return { loading, data };
};
