export type CheckboxCacheProps = {
  showCharactersLabel: string;
};

export type CheckboxProps = CheckboxCacheProps & {
  passwordType: string; //                                          DO DOPRECYZOWANIA
  toggleCharactersVisibility: () => void;
  
};
