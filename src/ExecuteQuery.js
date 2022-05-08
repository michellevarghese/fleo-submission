import { useState, useEffect } from "react";
import grid from "./utils";
import paginate from "./utils";
//const url = "https://api.github.com/users/fabpot/followers?per_page=100";
//const url = "https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc&page=1&per_page=10";
const url="https://api.github.com/search/repositories?q=sort=stars";
export const ExecuteQuery = (language) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getDetails = async () => {
    const response = await fetch(`https://api.github.com/search/repositories?q=language:${language}`
    );
    const data = await response.json();

    setData(grid(data.items));
    setLoading(false);
  };

  useEffect(() => {
    getDetails();
  }, []);
  return { loading, data };
};
