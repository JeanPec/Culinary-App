import { Button } from "../ui";
import cn from "classnames";

import "./StateButton.css";

export interface StateButtonProps {
  optionTrue: string;
  optionFalse: string;
  state: boolean;
  setState: (state: boolean) => void;
}

export const StateButton = ({
  optionTrue,
  optionFalse,
  state,
  setState,
}: StateButtonProps) => {
  return (
    <div className="stateButton">
      <Button
        disableStyle
        className={cn("stateOption", {
          activeState: state,
        })}
        onClick={() => {
          if (!state) setState(true);
        }}
      >
        {optionTrue}
      </Button>
      <div className="horizontalDivider" />
        <Button
          disableStyle
          className={cn("stateOption", {
            activeState: !state,
          })}
          onClick={() => {
            if (state) setState(false);
          }}
        >
          {optionFalse}
        </Button>
    </div>
  );
};
