import { TIntersectionObserverParagrah } from "../types";

import style from "./rwd.module.scss";
const { wrapper, wrapperParagraph } = style;

export const Paragraph = ({ data, id }: TIntersectionObserverParagrah) => {
  return (
    <div className={wrapper}>
      {data.map((paragraph, index) => (
        <p key={id + index} className={wrapperParagraph}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};
