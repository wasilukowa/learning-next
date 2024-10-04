import { BlockedProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper } = style;

export const Blocked = ({ inputReference }: BlockedProps) => {
  return (
    <input
      ref={inputReference}
      className={wrapper}
      type="text"
      maxLength={1}
      disabled
    />
  );
};
