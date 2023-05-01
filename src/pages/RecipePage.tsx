import React from "react";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import { useFetch } from "../hooks";
import { Loading } from "../splash/Loading";

import "./RecipePage.css";
import { Container, FlexContainer } from "../components";
import { RecipeCategories, RecipeType } from "../utils";
import { NavLinkButton } from "../components/NavLinkButton";
import { SummaryPage } from "./SummaryPage";
import { IngredientsListPage } from "./IngredientsListPage";

export const RecipePage = () => {
  const { id } = useParams();
  const { data, loading: loadingRecipe } = useFetch({
    endpoint: `recipes/${id}/information`,
  });

  const recipeInformation = data as unknown as RecipeType;

  if (loadingRecipe) return <Loading />;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Container header gutterBottom>
              <FlexContainer align='center'>
              <h1>{recipeInformation.title}</h1>
              <NavLinkButton title="Go Back to Search"/>
              </FlexContainer>
              
            </Container>
            <FlexContainer align={'center'} gap={10} gutterBottom>
              <img
                className="recipeImage"
                src={recipeInformation.image}
                alt={`${recipeInformation.title} recipe`}
              />
              <FlexContainer direction="column">
                {Object.values(RecipeCategories).map((value) => (
                  <NavLinkButton className="navLinkRecipe" title={value} />
                ))}
              </FlexContainer>
            </FlexContainer>
            <Outlet />
          </main>
        }
      >
        <Route
          path="summary"
          element={<SummaryPage summaryContent={recipeInformation.summary} />}
        />
        <Route path="ingredientsList" element={<IngredientsListPage ingredientsList={recipeInformation.extendedIngredients} />} />
        <Route path="IngredientsSteps" element={<>Ingredients</>} />
        <Route path="wines" element={<>Wines</>} />
      </Route>
    </Routes>
  );
};
