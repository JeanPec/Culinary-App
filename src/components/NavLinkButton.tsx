import {
  faFileLines,
  faList,
  faWineBottle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Button } from "../ui";
import { RecipeCategories } from "../utils";

import "./NavLinkButton.css";

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
    case 'Go Back to Search':
      route = "/..";
      image = <FontAwesomeIcon icon={faArrowLeft} />;
      break;
    default:
      route = "/..";
      image = <FontAwesomeIcon icon={faArrowLeft} />;
      break;
  }

  return (
    <NavLink className={"navLink"} to={route}>
      <Button className={className} iconBefore={image}>{title}</Button>
    </NavLink>
  );
};
