import { DropDown } from "../ui";
import { Border } from "./Border";

import styles from "./IngredientContainer.module.css";

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
      <DropDown overlay={<span>Available in aisle {aisle}</span>}>
        <li className={styles.listItem}>
          <img
            className={styles.imageRecipe}
            src={"https://spoonacular.com/cdn/ingredients_100x100/" + image}
            alt={`${name} ingredient`}
          />
          <span>{name}</span>
          <span className={styles.recipeMeasure}>{measure}</span>
        </li>
      </DropDown>
    </Border>
  );
};
