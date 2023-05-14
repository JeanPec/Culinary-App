import React, { HTMLAttributes } from "react";

import styles from "./DropDown.module.css";

export interface DropDownProps extends HTMLAttributes<HTMLDivElement> {
  overlay: React.ReactElement;
}

export const DropDown = React.forwardRef(
  (
    { children, overlay, ...props }: DropDownProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <div className={styles.dropdown} ref={ref} {...props}>
      {children}
      <div className={styles.dropdown_menu}>{overlay}</div>
    </div>
  )
);
