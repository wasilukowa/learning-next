import { Paragraph } from "./Paragraph";
import { ComponentToObserve } from "./ComponentToObserve";

import { useIntersectionObserverToAddClass } from "./useIntersectionObserverToAddClassHook";
import { useIntersectionObserver } from "./useIntersectionObserver";

import { TIntersectionObserverToAddClassUsageProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper, classActive, wrapperDivToObserve } = style;

const callbackFn = () => console.log("I CAN SEEE YOOOOUUUUU");

export const IntersectionObserverUsage = ({
  options,
  paragraphs,
}: TIntersectionObserverToAddClassUsageProps) => {
  // useIntersectionObserverToAddClass(options, classActive);

  const { refferenceForIO } = useIntersectionObserver(callbackFn, options);

  const firstParagraph = paragraphs[0];

  return (
    <div className={wrapper}>
      <Paragraph {...paragraphs[0]} />
      <Paragraph {...paragraphs[1]} />
      <div className={wrapperDivToObserve} ref={refferenceForIO}></div>
      <ComponentToObserve observeOptions={{ observeOnce: false }}>
        <p>example</p>
      </ComponentToObserve>
      <Paragraph {...paragraphs[2]} />
      <ComponentToObserve observeOptions={{ observeOnce: true }}>
        <p>example</p>
      </ComponentToObserve>
      <Paragraph {...paragraphs[0]} />
      <Paragraph {...paragraphs[1]} />
    </div>
  );
};
