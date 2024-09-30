import { DropdownListInfoProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper, wrapperLoading } = style;

export const DropdownListInfo = ({ label }: DropdownListInfoProps) => {
  return (
    <div className={wrapper}>
      <p className={wrapperLoading}>{label}</p>
    </div>
  );
};
