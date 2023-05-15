import {
  faFileLines,
  faList,
  faWineBottle,
  faArrowLeft,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Button } from "../ui";
import { RecipeCategories } from "../utils";
import cn from "classnames";

import styles from "./NavLinkButton.module.css";

export interface RecipeResultProps {
  className?: string;
  title: string;
}

export const NavLinkButton = ({ title, className }: RecipeResultProps) => {
  let route: string;
  let image: JSX.Element;

  switch (title) {
    case RecipeCategories.IngredientsList:
      route = "ingredientsList";
      image = <FontAwesomeIcon icon={faList} />;
      break;
    case RecipeCategories.IngredientsSteps:
      route = "IngredientsSteps";
      image = <FontAwesomeIcon icon={faList} />;
      break;
    case RecipeCategories.Summary:
      route = "summary";
      image = <FontAwesomeIcon icon={faFileLines} />;
      break;
    case RecipeCategories.Wine:
      route = "wines";
      image = <FontAwesomeIcon icon={faWineBottle} />;
      break;
    case "Go Back to Search":
      route = "/search";
      image = <FontAwesomeIcon icon={faArrowLeft} />;
      break;
    case "Resume":
      route = "resume";
      image = <FontAwesomeIcon icon={faUserTie} />;
      break;
    default:
      route = "/search";
      image = <FontAwesomeIcon icon={faArrowLeft} />;
      break;
  }

  return (
    <NavLink className={styles.navLink} to={route}>
      <Button className={cn(className, styles.button)} iconBefore={image}>
        {title}
      </Button>
    </NavLink>
  );
};
