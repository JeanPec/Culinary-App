import React, { AllHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Border.module.css";

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
        styles.container,
        {
          [styles.gutterBottom]: gutterBottom,
          [styles.header]: header,
        },
        className
      )}
      {...props}
    />
  )
);
