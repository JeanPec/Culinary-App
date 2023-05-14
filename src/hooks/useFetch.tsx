import { useState, useEffect } from "react";
import axios from "axios";
import { readFromCache, writeToCache } from "../utils/cache";

interface useFetchProps {
  endpoint: string;
  writeToCacheBoolean?: boolean;
  fact?: boolean;
  successDescription?: string;
  errorDescription?: string;
}

/*
    useFetch:
        - Custom Hook to get the info of an endpoint
        - use LocalStorage to read from cache at first (enhances UX) then update with the querry call
 */

export const useFetch = ({
  endpoint,
  writeToCacheBoolean = true,
  fact = false,
}: useFetchProps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://api.spoonacular.com/${endpoint}`;
    setLoading(true);
    if (readFromCache(url)) setData(readFromCache(url));
    axios
      .get(url, {
        params: {
          apiKey: fact ? process.env.REACT_APP_SPOONACULAR_API_KEY_FACT : process.env.REACT_APP_SPOONACULAR_API_KEY,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
        if (writeToCacheBoolean) writeToCache(url, response.data);
      })
      .catch((error: any) => {
        console.error(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [endpoint, writeToCacheBoolean, fact]);

  return { data, loading, error };
};
