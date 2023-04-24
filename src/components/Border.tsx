import React, { AllHTMLAttributes } from 'react';
import cn from 'classnames';

import './Border.css';

interface BorderProps extends AllHTMLAttributes<HTMLDivElement>{
  gutterBottom?: boolean;
}

export const Border = React.forwardRef(
  (
    {
      className,
      gutterBottom,
      ...props
    }: BorderProps,
    ref?: React.LegacyRef<HTMLDivElement> | undefined,
  ) => (
      <div
        ref={ref}
        className={cn(
          'border',
          {
            'gutterBottom': gutterBottom,
          },
          className,
        )}
        {...props}
      />
    )
);
