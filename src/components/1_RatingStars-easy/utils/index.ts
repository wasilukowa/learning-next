import { TRating } from "../types";

export const getAverageRating = (ratings: TRating[]): number => {
  const isEmpty = ratings.length === 0;
  //nie wyrzucamy errora jezeli nie mamy error handlingu gdzies wyzej
  if (isEmpty) {
    console.log("Given array is empty. Please check and try again.");
    return 0;
  }

  const sum = ratings.reduce((acc, rating) => {
    acc = acc + rating.score;
    return acc;
  }, 0);

  const average = sum / ratings.length;

  return Number.parseFloat(average.toFixed(1));
};

export const isValidNumberOfStars = (value: number): boolean => {
  const isValueInRange = value >= 0 && value <= 5;
  return isValueInRange;
};

export const isValidSize = (value: number): boolean => {
  const isValuePositive = value >= 0;
  return isValuePositive;
};
