import { ButtonProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper } = style;

// settings
export const Button = ({ label, onClickAction }: ButtonProps) => {
  return (
    <button className={wrapper} onClick={onClickAction}>
      {label}
    </button>
  );
};
