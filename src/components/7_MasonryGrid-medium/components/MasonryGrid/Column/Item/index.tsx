import { ItemProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper } = style;

export const Item = ({ image }: ItemProps) => {
  return <img className={wrapper} src={image.src} alt={image.alt} />;
};
