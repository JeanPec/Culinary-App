import { ElementType } from "react";

export type foodItem = {
  icon: ElementType;
  value: string;
};

export enum RecipeCategories {
  Summary = "Summary",
  IngredientsList = "List of Ingredients",
  IngredientsSteps = "Ingredients Steps",
  Wine = "Wine Suggestions",
}

export type ExtendedIngredients = {
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

export type Wine = {
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

export type WinePairing = {
  winePairing: {
    pairedWines: string[];
    pairingText: string;
    productMatches: Wine[];
  };
};

export type RecipeType = {
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
