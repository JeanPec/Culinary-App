import { faKitchenSet, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui";

import "./SwitchLinkButton.css";

export const SwitchLinkButton = () => {
  const location = useLocation();
  console.log(location);
  const isAboutMe = location.pathname.includes("aboutMe");
  const route = isAboutMe ? "/search" : "/aboutMe/summary";
  const image = isAboutMe ? (
    <FontAwesomeIcon icon={faKitchenSet} />
  ) : (
    <FontAwesomeIcon icon={faUser} />
  );
  const title = isAboutMe ? "Culinary App" : "about me";

  return (
    <Link className={"switchLink"} to={route}>
      <Button iconBefore={image}>{title}</Button>
    </Link>
  );
};
