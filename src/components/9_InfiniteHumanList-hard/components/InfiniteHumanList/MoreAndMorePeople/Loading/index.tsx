import { LoadingProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper, wrapperInformation } = style;

export const Loading = ({ information }: LoadingProps) => {
  return (
    <div className={wrapper}>
      <p className={wrapperInformation}>{information}</p>
    </div>
  );
};
