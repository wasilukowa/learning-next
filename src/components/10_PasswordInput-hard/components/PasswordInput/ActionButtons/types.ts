export type ActionButtonsChache = {
  showCharactersLabel: string;
  checkIfValidLabel: string;
  cleanInputsLabel: string;
};

export type ActionButtonsProps = ActionButtonsChache & {
  passwordType: string; // ------------------------------------------ DO DOPRECYZOWANIA
  toggleCharactersVisibility: () => void;
  checkIfPasswordIsValid: () => void;
  cleanPasswordInputs: () => void;
};
