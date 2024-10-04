import style from "./rwd.module.scss";
const { wrapper } = style;

import { ImagesHiddenProps } from "./types";
export const ImagesHidden = ({ images, refference }: ImagesHiddenProps) => {
  return (
    <div className={wrapper} ref={refference}>
      {images.map((image) => (
        <img key={image.id} src={image.src} />
      ))}
    </div>
  );
};
