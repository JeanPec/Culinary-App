import React, { useState } from "react";
import {
  CounterInput,
  FlexContainer,
  IngredientContainer,
  StateButton,
} from "../components";
import { ExtendedIngredients, round } from "../utils";

import "./SummaryPage.css";
import { Loading } from "../splash/Loading";

interface IngredientsListPageProps {
  ingredientsList: ExtendedIngredients[];
}

export const IngredientsListPage = ({
  ingredientsList,
}: IngredientsListPageProps) => {
  const [isMetric, setIsMetric] = useState(false);
  const [portion, setPortion] = useState(1);

  if (!ingredientsList) return <Loading />;

  return (
    <>
      <FlexContainer fullWidth align={"center"} justify={"space-around"}>
        <StateButton
          optionTrue={"Metric"}
          optionFalse={"US"}
          state={isMetric}
          setState={setIsMetric}
        />
        <CounterInput label='Servings' value={portion} onInputChanged={setPortion} />
      </FlexContainer>
      <ol>
        {ingredientsList.map((ingredient) => {
          const measure = isMetric
            ? `${round(ingredient.measures.metric.amount * portion, 2)} ${
                ingredient.measures.metric.unitShort
              }`
            : `${round(ingredient.measures.us.amount * portion, 2)} ${
                ingredient.measures.us.unitShort
              }`;
          return (
            <IngredientContainer
              image={ingredient.image}
              name={ingredient.name}
              measure={measure}
              aisle={ingredient.aisle}
            />
          );
        })}
      </ol>
    </>
  );
};
