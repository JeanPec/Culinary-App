import React, { AllHTMLAttributes, CSSProperties } from "react";
import cn from "classnames";

import "./FlexContainer.css";

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
        "container",
        {
          column: direction === "column",
          gutterBottom: gutterBottom,
          fullWidth: fullWidth,
        },
        className
      )}
      style={{ gap, alignItems: align, justifyContent: justify, ...style }}
      {...props}
    />
  )
);
