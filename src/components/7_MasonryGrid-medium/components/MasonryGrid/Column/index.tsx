import { ColumnProps } from "./types";

import { Item } from "./Item";

import style from "./rwd.module.scss";
const { wrapper } = style;

export const Column = ({ images }: ColumnProps) => {
  return (
    <div className={wrapper}>
      {images.map((imageInfo) => (
        <Item key={imageInfo.id} image={imageInfo} />
      ))}
    </div>
  );
};
