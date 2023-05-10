import React, { AllHTMLAttributes } from "react";
import cn from "classnames";

import "./Border.css";

interface ContainerProps extends AllHTMLAttributes<HTMLDivElement> {
  header?: boolean;
  gutterBottom?: boolean;
}

export const Container = React.forwardRef(
  (
    { className, header, gutterBottom, ...props }: ContainerProps,
    ref?: React.LegacyRef<HTMLDivElement> | undefined
  ) => (
    <div
      ref={ref}
      className={cn(
        "container",
        {
          gutterBottom: gutterBottom,
          header: header,
        },
        className
      )}
      {...props}
    />
  )
);
