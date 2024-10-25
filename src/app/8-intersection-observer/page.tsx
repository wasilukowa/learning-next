import { IntersectionObserverUsage } from '@/components/8_useIntersectionObserver-hard/components';
import { getIntersectionObserverDataFromAPI } from '@/data/data';

const IntersectionObserverPage = async () => {
  const data = await getIntersectionObserverDataFromAPI();

  return (
    <IntersectionObserverUsage
      options={data.options}
      paragraphs={data.paragraphs}
    />
  );
};

export default IntersectionObserverPage;
