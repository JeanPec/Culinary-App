import React, { useState } from "react";
import { FlexContainer } from "../components";
import { useFetch, getData } from "../hooks";
import { Button, SearchBar } from "../ui";

import "./SearchPage.css";

type funFact = {
  text: string;
};

export const SearchPage = () => {
  const [search, setSearch] = useState<string>();

  /*const { data, loading: loadingFact } = useFetch({
    endpoint: "food/trivia/random",
  });*/

  //const funFact = (data as unknown as funFact).text;

  return (
    <main>
      <div className="content">
        <h1>
          Looking for an idea ? <br />
          Type in your ingredients to get an awesome Recipe !
        </h1>
        {/*<h3>Fun Fact to get you started: {loadingFact ? 'loading...' : funFact}</h3>*/}
        <FlexContainer justify="center">
          <SearchBar
            className="searchBar"
            onSearch={setSearch}
            placeHolder={"Apple,Cheese,flour"}
          />
          <Button
            onClick={() => {
                getData({
                  endpoint: "recipes/complexSearch",
                  query: { query: search},
                }).then((response) => console.log(response?.data))
            }}
          >
            Search
          </Button>
        </FlexContainer>
      </div>
    </main>
  );
};
