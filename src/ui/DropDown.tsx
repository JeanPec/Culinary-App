import React, { HTMLAttributes } from "react";

import "./DropDown.css";

export interface DropDownProps extends HTMLAttributes<HTMLDivElement> {
    overlay: React.ReactElement;
}

export const DropDown = React.forwardRef(
  (
    { children, overlay, ...props }: DropDownProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <div className={"dropdown"} ref={ref} {...props} >
        {children}
        <div className={"dropdown-menu"}>
            {overlay}
        </div>
    </div>
  )
);
