import { FlexContainer, NavLinkButton } from "../components";

export const Header = () => {
  return (
    <FlexContainer>
      <NavLinkButton title="Summary" />
      <NavLinkButton title="Resume" />
      <NavLinkButton title="FallDuck" />
    </FlexContainer>
  );
};
