import { Avatar } from "./Avatar";

import { SinglePersonProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper, wrapperDetails, wrapperDetailsName, wrapperDetailsOther } =
  style;

export const SinglePerson = ({ person }: SinglePersonProps) => {
  const { name, surname, gender, age, avatarSrc } = person;
  return (
    <div className={wrapper}>
      <div className={wrapperDetails}>
        <div className={wrapperDetailsName}>
          <span>{name}&nbsp;</span>
          <span>{surname}</span>
        </div>
        <div className={wrapperDetailsOther}>
          <p>{gender}</p>
          <p>{age}</p>
        </div>
      </div>
      <Avatar source={avatarSrc} />
    </div>
  );
};
