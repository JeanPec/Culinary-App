import React, { useMemo } from "react";
import { Navigate, Outlet, Route, Routes, useParams } from "react-router-dom";
import { useFetch } from "../hooks";
import { Loading } from "../splash/Loading";

import "./RecipePage.css";
import { Container, FlexContainer } from "../components";
import { RecipeCategories, RecipeType } from "../utils";
import { NavLinkButton } from "../components/NavLinkButton";
import { SummaryPage } from "./SummaryPage";
import { IngredientsListPage } from "./IngredientsListPage";
import { IngredientsStepPage } from "./IngredientsStepPage";
import { WinePage } from "./WinePage";

export const RecipePage = () => {
  const { id } = useParams();
  const { data, loading: loadingRecipe } = useFetch({
    endpoint: `recipes/${id}/information`,
  });

  const recipeInformation = data as unknown as RecipeType;

  const navOptions = useMemo(
    () =>
      Object.values(RecipeCategories).filter((element) => {
        if (
          !recipeInformation.instructions &&
          !recipeInformation.winePairing?.pairingText
        ) {
          if (element === RecipeCategories.IngredientsSteps) return false;
          if (element === RecipeCategories.Wine) return false;
        }
        if (!recipeInformation.instructions) {
          if (element === RecipeCategories.IngredientsSteps) return false;
        }
        if (!recipeInformation.winePairing) {
          if (element === RecipeCategories.Wine) return false;
        }
        if (recipeInformation.winePairing) {
          if (recipeInformation.winePairing.pairingText === "") {
            if (element === RecipeCategories.Wine) return false;
          }
        }
        return true;
      }),
    [recipeInformation]
  );

  if (loadingRecipe) return <Loading />;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Container header gutterBottom>
              <FlexContainer fullWidth align="center" justify="space-around">
                <h1>{recipeInformation.title}</h1>
                <NavLinkButton title="Go Back to Search" />
              </FlexContainer>
            </Container>
            <FlexContainer align={"center"} gap={10} gutterBottom>
              <img
                className="recipeImage"
                src={recipeInformation.image}
                alt={`${recipeInformation.title} recipe`}
              />
              <FlexContainer direction="column">
                {navOptions.map((value) => (
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
        <Route
          path="ingredientsList"
          element={
            <IngredientsListPage
              ingredientsList={recipeInformation.extendedIngredients}
            />
          }
        />
        <Route
          path="IngredientsSteps"
          element={
            <IngredientsStepPage
              recipeInstructions={recipeInformation.instructions}
            />
          }
        />
        <Route
          path="wines"
          element={
            <WinePage
              summaryContent={recipeInformation.winePairing?.pairingText}
            />
          }
        />
        <Route index element={<Navigate to="summary" />} />
      </Route>
    </Routes>
  );
};
