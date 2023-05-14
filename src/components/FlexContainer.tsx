import React, { AllHTMLAttributes, CSSProperties } from "react";
import cn from "classnames";

import styles from "./FlexContainer.module.css";

interface FlexContainerProps extends AllHTMLAttributes<any> {
  align?: CSSProperties["alignItems"];
  direction?: "row" | "column";
  gap?: number;
  gutterBottom?: boolean;
  justify?: CSSProperties["justifyContent"];
  fullWidth?: boolean;
}

export const FlexContainer = React.forwardRef(
  (
    {
      align,
      className,
      direction = "row",
      fullWidth,
      gap = 8,
      gutterBottom,
      justify,
      style,
      ...props
    }: FlexContainerProps,
    ref?: React.LegacyRef<HTMLDivElement> | undefined
  ) => (
    <div
      ref={ref}
      className={cn(
        styles.container,
        {
          [styles.column]: direction === "column",
          [styles.gutterBottom]: gutterBottom,
          [styles.fullWidth]: fullWidth,
        },
        className
      )}
      style={{ gap, alignItems: align, justifyContent: justify, ...style }}
      {...props}
    />
  )
);
