import { Button } from "../ui";
import cn from "classnames";

import styles from "./StateButton.module.css";

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
    <div className={styles.stateButton}>
      <Button
        disableStyle
        className={cn(styles.stateOption, {
          [styles.activeState]: state,
        })}
        onClick={() => {
          if (!state) setState(true);
        }}
      >
        {optionTrue}
      </Button>
      <div className={styles.horizontalDivider} />
      <Button
        disableStyle
        className={cn(styles.stateOption, {
          [styles.activeState]: !state,
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
