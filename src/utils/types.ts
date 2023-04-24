import { ElementType } from "react";

export type foodItem = {
    icon: ElementType;
    value: string;
};

export enum RecipeCategories {
    Summary = 'Summary',
    Ingredients = 'List of Ingredients',
    Wine = 'Wine Suggestions',
  }