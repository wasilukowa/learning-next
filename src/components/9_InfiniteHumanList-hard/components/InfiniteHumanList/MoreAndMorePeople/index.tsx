import { ErrorMessage } from "./ErrorMessage";
import { ListOfPeople } from "./ListOfPeople";
import { Loading } from "./Loading";

import { MoreAndMorePeopleProps } from "./types";

import { useInfiniteScroll } from "./useInfiniteScroll";

import style from "./rwd.module.scss";
const { wrapper, classObserve, wrapperLoading } = style;

export const MoreAndMorePeople = ({
  ObserverOptions,
  initialNumberOfData,
  numberOfDataInSingleLoading,
  errorMessage,
}: MoreAndMorePeopleProps) => {
  const { dataToDisplay, divToObserve, isError, isBusy } = useInfiniteScroll(
    ObserverOptions,
    initialNumberOfData,
    numberOfDataInSingleLoading,
  );

  return (
    <div className={wrapper}>
      {isError && <ErrorMessage information={errorMessage} />}
      <ListOfPeople peopleToDisplay={dataToDisplay} />
      <div className={classObserve} ref={divToObserve} />
      <div className={wrapperLoading}>
        {isBusy && <Loading information="Loading..." />}
      </div>
    </div>
  );
};
