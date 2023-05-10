import { NavLink } from "react-router-dom";
import { FlexContainer } from "../components";
import { Button } from "../ui";

export const Header = () => {
  return (
    <FlexContainer>
      <NavLink className={"navLink"} to={"summary"}>
        <Button>Summary</Button>
      </NavLink>
      <NavLink className={"navLink"} to={"resume"}>
        <Button>Resume</Button>
      </NavLink>
    </FlexContainer>
  );
};
