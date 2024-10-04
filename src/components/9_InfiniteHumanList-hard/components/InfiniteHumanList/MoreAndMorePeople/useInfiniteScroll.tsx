import { useEffect, useRef, useState } from "react";
import { getUsers, getScrapOfArray } from "../../../utils";

import { TUseInfiniteScroll } from "./types";
export const useInfiniteScroll: TUseInfiniteScroll = (
  options,
  initialNumberOfData,
  numberOfDataInSingleLoading,
) => {
  const [initialData, setInitialData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [page, setPage] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isBusy, setIsBusy] = useState(true);

  const divToObserve = useRef<null | HTMLDivElement>(null);

  const numberOfPagesFromInitialData = Math.ceil(
    initialNumberOfData / numberOfDataInSingleLoading,
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setPage((prevState) => prevState + 1);
      }
    });
  }, options);

  const generateInitialDataArray = async (dataLength: number) => {
    setIsBusy(true);
    try {
      const people = await getUsers(dataLength);
      setInitialData(people);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsBusy(false);
    }
  };

  const loadAdditionalScrubOfData = async () => {
    setIsBusy(true);
    try {
      const newPortion = await getUsers(numberOfDataInSingleLoading);
      setDataToDisplay(dataToDisplay.concat(newPortion));
    } catch (error) {
      setIsError(true);
    } finally {
      setIsBusy(false);
    }
  };

  useEffect(() => {
    generateInitialDataArray(initialNumberOfData);

    const initialPortionOfPeople = getScrapOfArray(
      initialData,
      page,
      numberOfDataInSingleLoading,
    );
    setDataToDisplay(initialPortionOfPeople);

    if (divToObserve.current) {
      observer.observe(divToObserve.current);
    }
  }, [divToObserve.current]);

  useEffect(() => {
    const newScrap = getScrapOfArray(
      initialData,
      page,
      numberOfDataInSingleLoading,
    );
    setDataToDisplay((prevState) => {
      return prevState.concat(newScrap);
    });

    const isInitialDataLeftToDisplay = page < numberOfPagesFromInitialData;

    if (!isInitialDataLeftToDisplay) {
      loadAdditionalScrubOfData();
    }
  }, [page, initialData]);

  return {
    dataToDisplay,
    divToObserve,
    isError,
    isBusy,
  };
};
