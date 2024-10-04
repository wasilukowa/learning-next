export type TPerson = {
  id: string;
  avatarSrc: string;
  name: string;
  surname: string;
  age: number;
  gender: string;
};

export type SinglePersonProps = {
  person: TPerson;
};
