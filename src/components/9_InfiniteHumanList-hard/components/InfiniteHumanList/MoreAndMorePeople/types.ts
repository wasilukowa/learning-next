import { MutableRefObject } from "react";
import { TObserverOptions, TPerson } from "../types";

export type MoreAndMorePeopleProps = {
  ObserverOptions: TObserverOptions;
  initialNumberOfData: number;
  numberOfDataInSingleLoading: number;
  errorMessage: string;
};

type UseInfintePeopleReturn = {
  dataToDisplay: TPerson[];
  divToObserve: MutableRefObject<null | HTMLDivElement>;
  isError: boolean;
  isBusy: boolean;
};

export type TUseInfiniteScroll = (
  options: TObserverOptions,
  initialNumberOfData: number,
  numberOfDataInSingleLoading: number,
) => UseInfintePeopleReturn;
