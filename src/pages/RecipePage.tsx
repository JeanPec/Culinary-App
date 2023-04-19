import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FlexContainer, RecipeResult } from "../components";
import { useFetch, getData } from "../hooks";
import { Button, SearchBar } from "../ui";

import "./SearchPage.css";

type RecipeType = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export const RecipePage = () => {
    const { id } = useParams();
  const { data, loading: loadingRecipe } = useFetch({
    endpoint: `recipes/${id}/information`,
  });

  console.log(data);

  //const funFact = (data as unknown as { text: string }).text;

  return (
    <main>
    </main>
  );
};
