import { useValidPasswordInformation } from "./useValidPasswordInformation";
import { ValidPasswordInformationProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperInformation } = styles;

export const ValidPasswordInformation = ({
  validPasswordStatement,
}: ValidPasswordInformationProps) => {
  useValidPasswordInformation();

  return (
    <div className={wrapper}>
      <p className={wrapperInformation}>{validPasswordStatement}</p>
    </div>
  );
};
