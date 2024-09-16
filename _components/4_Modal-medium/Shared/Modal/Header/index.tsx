import { HeaderProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper, wrapperHeader, wrapperButton, wrapperButtonClose } = style;

export const Header = ({ title, closeModal }: HeaderProps) => {
  return (
    <div className={wrapper}>
      <h3 className={wrapperHeader}>{title}</h3>

      <button className={wrapperButton} onClick={closeModal}>
        <span className={wrapperButtonClose}></span>
      </button>
    </div>
  );
};
