import React from "react";
import { AnalizedInstructions } from "../utils";

import styles from "./IngredientsStepPage.module.css";

interface IngredientsStepPageProps {
  recipeInstructions?: AnalizedInstructions[];
}

export const IngredientsStepPage = ({
  recipeInstructions,
}: IngredientsStepPageProps) => {
  if (!recipeInstructions) return null;
  const steps = recipeInstructions[0].steps;

  return (
    <ol
      className={styles.ingredientSteps}
      style={{ "--length": steps.length } as React.CSSProperties}
    >
      {steps?.map((step) => (
        <li
          className={styles.ingredientStep}
          style={{ "--i": step.number } as React.CSSProperties}
        >
          <span className={styles.ingredientStepContent}>{step.step}</span>
        </li>
      ))}
    </ol>
  );
};
