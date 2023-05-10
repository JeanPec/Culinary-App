import React from "react";

import "./IngredientsStepPage.css";

interface IngredientsStepPageProps {
  recipeInstructions?: string;
}

export const IngredientsStepPage = ({
  recipeInstructions,
}: IngredientsStepPageProps) => {
  const data = recipeInstructions?.split(".").filter((value) => value !== "");

  return (
    <ol
      className={"ingredientSteps"}
      style={{ "--length": data?.length } as React.CSSProperties}
    >
      {data?.map((value, index) => (
        <li
          className={"ingredientStep"}
          style={{ "--i": index + 1 } as React.CSSProperties}
        >
          <span className="ingredientStepContent">
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        </li>
      ))}
    </ol>
  );
};
