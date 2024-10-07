import { Button } from "./Button";
import { Checkbox } from "./Checkbox";

import { ActionButtonsProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

export const ActionButtons = ({
  showCharactersLabel,
  checkIfValidLabel,
  cleanInputsLabel,
  toggleCharactersVisibility,
  checkIfPasswordIsValid,
  cleanPasswordInputs,
  passwordType
}: ActionButtonsProps) => {
  return (
    <div className={wrapper}>
      <Checkbox
        passwordType={passwordType}
        showCharactersLabel={showCharactersLabel}
        toggleCharactersVisibility={toggleCharactersVisibility}
      />
      <div>
        <Button
          label={checkIfValidLabel}
          onClickAction={checkIfPasswordIsValid}
        />
        <Button label={cleanInputsLabel} onClickAction={cleanPasswordInputs} />
      </div>
    </div>
  );
};
