import { SinglePerson } from "./SinglePerson";

import { ListOfPeopleProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper } = style;

export const ListOfPeople = ({ peopleToDisplay }: ListOfPeopleProps) => {
  return (
    <div className={wrapper}>
      {peopleToDisplay.map((person) => (
        <SinglePerson key={person.id} person={person} />
      ))}
    </div>
  );
};
