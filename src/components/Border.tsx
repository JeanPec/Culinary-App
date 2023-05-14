import React, { AllHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Border.module.css";

interface BorderProps extends AllHTMLAttributes<HTMLDivElement> {
  small?: boolean;
  noBackGround?: boolean;
  gutterBottom?: boolean;
}

export const Border = React.forwardRef(
  (
    {
      className,
      small = false,
      noBackGround,
      gutterBottom,
      ...props
    }: BorderProps,
    ref?: React.LegacyRef<HTMLDivElement> | undefined
  ) => (
    <div
      ref={ref}
      className={cn(
        styles.border,
        {
          [styles.gutterBottom]: gutterBottom,
          [styles.noBackGround]: noBackGround,
          [styles.small]: small,
        },
        className
      )}
      {...props}
    />
  )
);
