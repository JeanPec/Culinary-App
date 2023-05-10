import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, HTMLAttributes } from "react";
import { FlexContainer } from "../components";
import { Button } from "../ui";

import "./CounterInput.css";

export interface CounterInputProps extends HTMLAttributes<HTMLInputElement> {
  value: number;
  label?: string;
  onInputChanged: (val: number) => void;
}

export const CounterInput = React.forwardRef(
  (
    { value, label, onInputChanged, ...props }: CounterInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onInputChanged(+e.currentTarget.value);
    };

    return (
      <FlexContainer direction={"column"} justify="center">
        {!!label && (
          <label className="label" htmlFor="counterInput">
            {label}
          </label>
        )}
        <FlexContainer align="center">
          <Button
            iconAfter={<FontAwesomeIcon icon={faMinus} />}
            disabled={value === 0}
            onClick={() => onInputChanged(value - 1)}
          />
          <input
            id="counterInput"
            value={value.toString()}
            onChange={handleChange}
            className={"numberInput"}
            type="number"
            min={0}
            max={10000}
            ref={ref}
            {...props}
          />
          <Button
            iconAfter={<FontAwesomeIcon icon={faPlus} />}
            onClick={() => onInputChanged(value + 1)}
          />
        </FlexContainer>
      </FlexContainer>
    );
  }
);
