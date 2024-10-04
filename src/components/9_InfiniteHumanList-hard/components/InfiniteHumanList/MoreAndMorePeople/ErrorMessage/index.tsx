import { ErrorProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper, wrapperInformation } = style;

export const ErrorMessage = ({ information }: ErrorProps) => {
  return (
    <div className={wrapper}>
      <p className={wrapperInformation}>{information}</p>
    </div>
  );
};
