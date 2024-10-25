import { InfiniteHumanList } from '@/components/9_InfiniteHumanList-hard/components';
import { getInfiniteHumanListData } from '@/data/data';

const InfiniteHumanListPage = async () => {
  const data = await getInfiniteHumanListData();

  return (
    <InfiniteHumanList
      ObserverOptions={data.ObserverOptions}
      initialNumberOfData={data.initialNumberOfData}
      numberOfDataInSingleLoading={data.numberOfDataInSingleLoading}
      footer={data.footer}
      errorMessage={data.errorMessage}
    />
  );
};

export default InfiniteHumanListPage;
