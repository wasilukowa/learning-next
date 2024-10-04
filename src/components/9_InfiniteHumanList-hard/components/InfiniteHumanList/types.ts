import { FooterProps } from "./Footer/types";
import { MoreAndMorePeopleProps } from "./MoreAndMorePeople/types";

export type TObserverOptions = {
  root: any;
  rootMargin: string;
  threshold: number;
};

export type InfiniteHumanListProps = MoreAndMorePeopleProps & {
  footer: FooterProps;
};

export type TPerson = {
  id: string;
  name: string;
  surname: string;
  gender: string;
  avatarSrc: string;
  age: number;
};
