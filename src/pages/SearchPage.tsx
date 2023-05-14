import React, { useCallback, useState } from "react";
import { Border, Container, FlexContainer, RecipeResult } from "../components";
import { useToastContext } from "../context";
import { useFetch, getData } from "../hooks";
import { Loading } from "../splash/Loading";
import { Button, SearchBar } from "../ui";
import { DataSearchType, RecipeSearchType } from "../utils";

import styles from "./SearchPage.module.css";

export const SearchPage = () => {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<RecipeSearchType[]>([]);
  const { warningMessage, errorMessage } = useToastContext();

  const { data, loading: loadingFact } = useFetch({
    endpoint: "food/trivia/random",
    fact: true,
  });

  const handleSearch = useCallback(() => {
    getData({
      endpoint: "recipes/complexSearch",
      query: { query: search },
    })
      .then((response) => {
        const result = (response as unknown as DataSearchType).data.results;
        if (result) {
          if (result.length === 0)
            warningMessage(
              "There are no results for this search please make sure you did not make a typo"
            );
          setResults(result);
        }
      })
      .catch((error) => errorMessage("Error in the query"));
  }, [errorMessage, search, warningMessage]);

  const funFact = (data as unknown as { text: string }).text;

  if (loadingFact) return <Loading />;

  return (
    <main>
      <Container header gutterBottom>
        <h1 className={styles.titleSearch}>
          Looking for an idea ? <br />
          Type in your ingredients to get an awesome Recipe !
        </h1>
      </Container>
      <FlexContainer direction="column" className={styles.resultMain}>
        <Border gutterBottom>
          <h3>
            Fun Fact to get you started: {loadingFact ? "loading..." : funFact}
          </h3>
          <FlexContainer justify="center">
            <SearchBar
              className={styles.searchBar}
              onValueChanged={setSearch}
              onSearch={handleSearch}
              placeHolder={"Apple,Cheese,flour"}
            />
            <Button onClick={() => handleSearch()}>Search</Button>
          </FlexContainer>
        </Border>
        {results.length > 0 && (
          <div className={styles.results}>
            {results.map(({ id, title, image }) => (
              <RecipeResult id={id} title={title} image={image} />
            ))}
          </div>
        )}
      </FlexContainer>
    </main>
  );
};
