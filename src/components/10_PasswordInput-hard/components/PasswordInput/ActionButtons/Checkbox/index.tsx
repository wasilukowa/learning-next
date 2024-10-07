import { CheckboxProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper } = style;

export const Checkbox = ({
  showCharactersLabel,
  toggleCharactersVisibility,
  passwordType
}: CheckboxProps) => {

  const isPasswordVisible = passwordType === 'text' ? true : false;

  return (
    <div className={wrapper}>
      <input
        type="checkbox"
        id="characters-visibility"
        onChange = {toggleCharactersVisibility}
        checked = {isPasswordVisible}
      />
      <label htmlFor="characters-visibility">{showCharactersLabel}</label>
    </div>
  );
};
