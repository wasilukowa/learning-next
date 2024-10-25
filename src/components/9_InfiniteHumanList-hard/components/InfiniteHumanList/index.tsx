import { Footer } from './Footer';
import { MoreAndMorePeople } from './MoreAndMorePeople';

import { InfiniteHumanListProps } from './types';

import style from './rwd.module.scss';
const { wrapper } = style;

export const InfiniteHumanList = ({
  ObserverOptions,
  initialNumberOfData,
  numberOfDataInSingleLoading,
  footer,
  errorMessage,
}: InfiniteHumanListProps) => {
  return (
    <div className={wrapper}>
      <MoreAndMorePeople
        ObserverOptions={ObserverOptions}
        initialNumberOfData={initialNumberOfData}
        numberOfDataInSingleLoading={numberOfDataInSingleLoading}
        errorMessage={errorMessage}
      />
      <Footer {...footer} />
    </div>
  );
};
