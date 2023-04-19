import React, { useState } from "react";
import { FlexContainer, RecipeResult } from "../components";
import { useFetch, getData } from "../hooks";
import { Button, SearchBar } from "../ui";

import "./SearchPage.css";

type RecipeType = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export const SearchPage = () => {
  const [search, setSearch] = useState<string>();
  const [results, setResults] = useState<RecipeType[]>([
    {
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715538,
      title: "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
      image: "https://spoonacular.com/recipeImages/715538-312x231.jpg",
      imageType: "jpg",
    },
  ]);

  /*const { data, loading: loadingFact } = useFetch({
    endpoint: "food/trivia/random",
  });*/

  //const funFact = (data as unknown as { text: string }).text;

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
                query: { query: search },
              }).then((response) => console.log(response?.data));
            }}
          >
            Search
          </Button>
        </FlexContainer>
      </div>
      <div className="results">
        {results.map(({ id, title, image }) => (
          <RecipeResult id={id} title={title} image={image} />
        ))}
      </div>
    </main>
  );
};
