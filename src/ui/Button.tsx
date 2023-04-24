import React, { HTMLAttributes } from "react";
import { FlexContainer } from "../components";

import "./Button.css";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  seeMore?: boolean;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
}

/*
    Button:
        - close state to manage when used in the Modal
 */

export const Button = React.forwardRef(
  (
    { seeMore, iconAfter, iconBefore, children, ...props }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => (
    <button type="button" className={"button"} ref={ref} {...props}>
      <FlexContainer align={'center'}>
      {!!iconBefore && iconBefore}
      {children}
      {!!iconAfter && iconAfter}
      </FlexContainer>
    </button>
  )
);
