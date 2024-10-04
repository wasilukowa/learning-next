import Image from "next/image";

import style from "./rwd.module.scss";
const { wrapper, wrapperImage } = style;

export const Avatar = ({ source }) => {
  return (
    <div className={wrapper}>
      <Image
        className={wrapperImage}
        src={source}
        width={100}
        height={0}
        alt={"random"} // TO BE GENERATED
      />
    </div>
  );
};
