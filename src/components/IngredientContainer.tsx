import { DropDown } from "../ui";
import { Border } from "./Border";

import "./IngredientContainer.css";

export interface IngredientContainerProps {
  image: string;
  name: string;
  measure: string;
  aisle: string;
}

export const IngredientContainer = ({
  image,
  name,
  measure,
  aisle,
}: IngredientContainerProps) => {
  return (
    <Border noBackGround gutterBottom>
      <DropDown
        overlay={
          <span>Available in aisle {aisle}</span>
        }
      >
        <li className="listItem">
          <img
            className="imageRecipe"
            src={"https://spoonacular.com/cdn/ingredients_100x100/" + image}
            alt={`${name} ingredient`}
          />
          <span>{name}</span>
          <span className={'recipeMeasure'}>{measure}</span>
        </li>
      </DropDown>
    </Border>
  );
};
