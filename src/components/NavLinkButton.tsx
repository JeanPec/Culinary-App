import {
  faFileLines,
  faList,
  faWineBottle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui";
import { RecipeCategories } from "../utils";
import { FlexContainer } from "./FlexContainer";

import "./NavLinkButton.css";

export interface RecipeResultProps {
  title: string;
}

export const NavLinkButton = ({ title }: RecipeResultProps) => {
  let route: string;
  let image: JSX.Element;

  switch (title) {
    case RecipeCategories.Ingredients:
      route = "ingredients";
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
    default:
      route = "ingredients";
      image = <FontAwesomeIcon icon={faList} />;
      break;
  }

  return (
    <NavLink to={route} >
      <Button iconBefore={image}>{title}</Button>
    </NavLink>
  );
};
