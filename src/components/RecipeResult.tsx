import { Link } from "react-router-dom";
import { Border } from "./Border";
import { FlexContainer } from "./FlexContainer";

import "./RecipeResult.css";

export interface RecipeResultProps {
  id: number;
  title: string;
  image: string;
}

export const RecipeResult = ({ id, title, image }: RecipeResultProps) => {
  return (
    <Border noBackGround gutterBottom className="recipe">
      <Link to={`/recipe/${id}`}>
        <FlexContainer direction={"row"} align={"center"} gap={12}>
          <img className="image" src={image} alt={`${title} recipe`} />
          <span>{title}</span>
        </FlexContainer>
      </Link>
    </Border>
  );
};
