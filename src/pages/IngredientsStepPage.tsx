import React from "react";

import styles from "./IngredientsStepPage.module.css";

interface IngredientsStepPageProps {
  recipeInstructions?: string;
}

export const IngredientsStepPage = ({
  recipeInstructions,
}: IngredientsStepPageProps) => {
  const data = recipeInstructions?.split(".").filter((value) => value !== "");

  return (
    <ol
      className={styles.ingredientSteps}
      style={{ "--length": data?.length } as React.CSSProperties}
    >
      {data?.map((value, index) => (
        <li
          className={styles.ingredientStep}
          style={{ "--i": index + 1 } as React.CSSProperties}
        >
          <span className={styles.ingredientStepContent}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        </li>
      ))}
    </ol>
  );
};
