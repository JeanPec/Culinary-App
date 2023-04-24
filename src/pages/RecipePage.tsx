import React, { useState } from "react";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import { useFetch } from "../hooks";
import { Loading } from "../splash/Loading";
import DOMPurify from "dompurify";

import "./RecipePage.css";
import { Border, FlexContainer } from "../components";
import { RecipeCategories } from "../utils";
import { NavLinkButton } from "../components/NavLinkButton";

type ExtendedIngredients = {
  amount: number;
  aisle: string;
  id: number;
  image: string;
  name: string;
  measures: {
    metric: {
      amount: number;
      unitLong: string;
      unitShort: string;
    };
    us: {
      amount: number;
      unitLong: string;
      unitShort: string;
    };
  };
};

type Wine = {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  averageRating: number;
  ratingCount: number;
  score: number;
  link: string;
};

type WinePairing = {
  winePairing: {
    pairedWines: string[];
    pairingText: string;
    productMatches: Wine[];
  };
};

type RecipeType = {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  sourceName: string;
  sourceUrl: string;
  spoonacularScore: number;
  cheap: boolean;
  dairyFree: boolean;
  cuisines: string[];
  glutenFree: boolean;
  vegan: boolean;
  extendedIngredients: ExtendedIngredients[];
  summary: string;
  winePairing: WinePairing;
};

export const RecipePage = () => {
  const { id } = useParams();
  const { data, loading: loadingRecipe } = useFetch({
    endpoint: `recipes/${id}/information`,
  });

  const recipeInformation = data as unknown as RecipeType;
  console.log(recipeInformation);

  if (true) return <Loading />;

  // Sanitize the HTML content
  const sanitizedHtmlContent = DOMPurify.sanitize(recipeInformation.summary);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Border>
              <h1>{recipeInformation.title}</h1>
            </Border>
            <Border>
              <img
                className="RecipeImage"
                src={recipeInformation.image}
                alt={`${recipeInformation.title} recipe`}
              />
            </Border>
            <Border>
              <FlexContainer>
                {Object.values(RecipeCategories).map((value) => (
                  <NavLinkButton title={value} />
                ))}
              </FlexContainer>
            </Border>
            <Outlet />
          </main>
        }
      >
        <Route path="ingredients" element={<>Ingredients</>} />
        <Route path="wines" element={<>Wines</>} />
        <Route path="summary" element={<>Summary</>} />
      </Route>
    </Routes>
  );
};
