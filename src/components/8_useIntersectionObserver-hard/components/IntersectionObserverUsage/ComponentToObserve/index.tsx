import { ComponentToObserveProps } from "./type";

import style from "./rwd.module.scss";
const { wrapper } = style;

export const ComponentToObserve = ({
  observeOptions,
  children,
}: ComponentToObserveProps) => {
  let dataAttribute = "infinite";

  if (observeOptions.observeOnce) dataAttribute = "once";

  return (
    <div className={wrapper} data-observe={dataAttribute}>
      {children}
    </div>
  );
};
