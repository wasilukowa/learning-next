import { Footer } from './Footer';
import { MoreAndMorePeople } from './MoreAndMorePeople';

import { InfiniteHumanListProps } from './types';

import style from './rwd.module.scss';
const { wrapper } = style;

const data = {
  ObserverOptions: {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  },
  initialNumberOfData: 100,
  numberOfDataInSingleLoading: 10,
  errorMessage: 'Something went wrong',
  footer: {
    information: 'All rights reserved.',
  },
};

export const InfiniteHumanList = (
  {
    // ObserverOptions,
    // initialNumberOfData,
    // numberOfDataInSingleLoading,
    // footer,
    // errorMessage,
  },
) => {
  return (
    <div className={wrapper}>
      <MoreAndMorePeople
        ObserverOptions={data.ObserverOptions}
        initialNumberOfData={data.initialNumberOfData}
        numberOfDataInSingleLoading={data.numberOfDataInSingleLoading}
        errorMessage={data.errorMessage}
      />
      <Footer {...data.footer} />
    </div>
  );
};
