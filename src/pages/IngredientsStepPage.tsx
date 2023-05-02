import React, { useState } from "react";
import {
  CounterInput,
  FlexContainer,
  IngredientContainer,
  StateButton,
} from "../components";
import { round } from "../utils";

import "./SummaryPage.css";
import { Loading } from "../splash/Loading";
import { useFetch } from "../hooks";

interface IngredientsStepPageProps {
  recipeInstructions?: string;
}

export const IngredientsStepPage = ({
    recipeInstructions,
}: IngredientsStepPageProps) => {
  const { data, loading: loadingRecipe } = useFetch({
    endpoint: `recipes/${recipeInstructions}/analyze`,
  });

  if(!recipeInstructions) return <>error</>

  if(loadingRecipe) return <Loading />;

  console.log(data)

  return (
    <>
      test
    </>
  );
};
