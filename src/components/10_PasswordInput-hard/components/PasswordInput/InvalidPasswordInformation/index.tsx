import { InvalidPasswordInformationProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper, wrapperInformation } = style;

export const InvalidPasswordInformation = ({
  invalidPasswordStatement,
}: InvalidPasswordInformationProps) => {
  return (
    <div className={wrapper}>
      <p className={wrapperInformation}>{invalidPasswordStatement}</p>
    </div>
  );
};
