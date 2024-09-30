import style from "./rwd.module.scss";
import { ContentProps } from "./types";

const { content, contentTitle, contentBody } = style;

export const Content = ({ title, body }: ContentProps) => {
  return (
    <div className={content}>
      <h1 className={contentTitle}> {title} </h1>
      <p className={contentBody}> {body} </p>
    </div>
  );
};
