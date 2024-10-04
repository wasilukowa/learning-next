import style from "./rwd.module.scss";
const { wrapper, wrapperInfo } = style;

import { FooterProps } from "./types";

export const Footer = ({ information }: FooterProps) => {
  return (
    <div className={wrapper}>
      <p className={wrapperInfo}>{information}</p>
    </div>
  );
};
