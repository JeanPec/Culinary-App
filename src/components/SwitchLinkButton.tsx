import { faKitchenSet, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui";

import styles from "./SwitchLinkButton.module.css";

export const SwitchLinkButton = () => {
  const location = useLocation();
  const isAboutMe = location.pathname.includes("aboutMe");
  const route = isAboutMe ? "/search" : "/aboutMe/summary";
  const image = isAboutMe ? (
    <FontAwesomeIcon icon={faKitchenSet} />
  ) : (
    <FontAwesomeIcon icon={faUser} />
  );
  const title = isAboutMe ? "Culinary App" : "About Me";

  return (
    <Link className={styles.switchLink} to={route}>
      <Button className={styles.button} iconBefore={image}>{title}</Button>
    </Link>
  );
};
