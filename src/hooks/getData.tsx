import axios from "axios";
import { NUMBER_RECIPES } from "../utils";

interface useGetProps {
  endpoint: string;
  query?: any;
  number?: number;
  writeToCacheBoolean?: boolean;
}

/*
    useFetch:
        - Custom Hook to get the info of an endpoint
        - use LocalStorage to read from cache at first (enhances UX) then update with the querry call
 */

export const getData = async ({ endpoint, query, number }: useGetProps) => {
  const url = `https://api.spoonacular.com/${endpoint}`;
  try {
    return await axios.get(url, {
      params: {
        ...query,
        number: number ?? NUMBER_RECIPES,
        apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY || "",
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
