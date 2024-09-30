import Image from "next/image";
import { InputProps } from "./type";

import style from "./rwd.module.scss";
const { wrapper, wrapperInput, searchImage } = style;

export const Input = ({ handleChange }: InputProps) => {
  return (
    <label htmlFor="qwe" className={wrapper}>
      <input
        id="qwe"
        className={wrapperInput}
        type="text"
        name="phrase"
        onChange={handleChange}
      />
      <Image
        className={searchImage}
        src="/search.png"
        width={24}
        height={24}
        alt="Icon of magnifier"
      />
    </label>
  );
};
