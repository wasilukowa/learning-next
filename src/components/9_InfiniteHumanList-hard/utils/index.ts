import { v4 as uuidv4 } from "uuid";
import { TRandomUser } from "./types";
import { TPerson } from "../components/InfiniteHumanList/types";

export const getUsers = async (number: number): Promise<TPerson[]> => {
  const response = await fetch(
    `https://randomuser.me/api/?results=${number}&inc=gender,name,location,picture`,
  );
  const data = await response.json();

  const result = getPreparedData(data.results);
  return result;
};

const getPreparedData = (data: TRandomUser[]): TPerson[] => {
  const prepared = data.map((person) => {
    return {
      id: uuidv4(),
      name: person.name.first,
      surname: person.name.last,
      gender: person.gender,
      avatarSrc: person.picture.large,
      age: getRandomAge(),
    };
  });

  return prepared;
};

const getRandomAge = () => {
  const randomAge = getRandomIntInclusive(18, 70);
  return randomAge;
};

const getRandomIntInclusive = (min: number, max: number): number => {
  const isMinMaxValuesValid = min <= max;
  if (!isMinMaxValuesValid) return 0;

  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  const randomNumber = Math.floor(
    Math.random() * (maxFloor - minCeil + 1) + minCeil,
  );

  return randomNumber;
};

export const getScrapOfArray = <T>(
  dataArray: T[],
  numberOfScrap: number,
  numberOfElementsInScrap: number,
): T[] => {
  const dataLength = dataArray.length;
  const isNumberOfScrapValid =
    numberOfScrap > 0 &&
    numberOfElementsInScrap <= Math.ceil(dataLength / numberOfElementsInScrap);

  if (!isNumberOfScrapValid) return [];

  const startIndex = numberOfScrap * numberOfElementsInScrap;
  const endIndex = (numberOfScrap + 1) * numberOfElementsInScrap;

  const scrapOfData = dataArray.slice(startIndex, endIndex);

  return scrapOfData;
};

// -----------------------------------------------------------------------------------------------------------

export const generatePeopleArray = (
  numberOfPeople: number,
  maleNames: string[],
  femaleNames: string[],
  surnames: string[],
) => {
  const people = Array.from({ length: numberOfPeople }, () =>
    generatePerson(maleNames, femaleNames, surnames),
  );
  return people;
};

const generatePerson = (
  maleNames: string[],
  femaleNames: string[],
  surnames: string[],
) => {
  const gender = getRandomGender();
  const age = getRandomAge();

  const id = uuidv4();

  let name = "";

  if (gender === "male") name = getRandomValueFromArray(maleNames);
  if (gender === "female") name = getRandomValueFromArray(femaleNames);

  const surname = getRandomValueFromArray(surnames);

  const person = {
    id,
    name,
    surname,
    gender,
    age,
    avatarSrc: `https://i.pravatar.cc/150?u=${id}`,
  };

  return person;
};

const getRandomValueFromArray = (arrayWithValues: string[]) => {
  const arrayLength = arrayWithValues.length;
  const randomPosition = getRandomIntInclusive(0, arrayLength);
  const randomValue = arrayWithValues[randomPosition];
  return randomValue;
};

const getRandomGender = () => {
  const randomNumber = getRandomIntInclusive(1, 2);
  if (randomNumber === 1) return "male";
  return "female";
};
