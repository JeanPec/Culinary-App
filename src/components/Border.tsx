import React, { AllHTMLAttributes } from "react";
import cn from "classnames";

import "./Border.css";

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
        "border",
        {
          gutterBottom: gutterBottom,
          noBackGround: noBackGround,
          small: small,
        },
        className
      )}
      {...props}
    />
  )
);
