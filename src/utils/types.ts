import { ElementType } from "react";

export type foodItem = {
  icon: ElementType;
  value: string;
};

export enum RecipeCategories {
  Summary = "Summary",
  IngredientsList = "List of Ingredients",
  IngredientsSteps = "Ingredients Steps",
  Wine = "Wine Pairing",
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
  pairedWines: string[];
  pairingText: string;
  productMatches: Wine[];
};

export type Equipment = {
  id: number;
  image: string;
  localizedName: string;
  name: string;
};

export type SimpleIngredient = {
  id: number;
  image: string;
  localizedName: string;
  name: string;
};

export type RecipeStep = {
  number: number;
  equipment?: Equipment[];
  ingredients?: SimpleIngredient[];
  length?: {
    number: number;
    unit: string;
  };
  step: string;
};

export type AnalizedInstructions = {
  name: string;
  steps: RecipeStep[];
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
  analyzedInstructions?: AnalizedInstructions[];
  cuisines: string[];
  glutenFree: boolean;
  vegan: boolean;
  extendedIngredients: ExtendedIngredients[];
  summary: string;
  winePairing: WinePairing;
};

export type RecipeSearchType = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export type DataSearchType = {
  data: {
    number: number;
    results: RecipeSearchType[];
  };
};

export enum ToastType {
  Error = "Error",
  Warning = "Warning",
  Info = "Info",
  Success = "Success",
}

export type ToastProperty = {
  id: number;
  title: ToastType;
  description: string;
};

export enum ToastPosition {
  right = "bottom-right",
  top = "top-middle",
}
