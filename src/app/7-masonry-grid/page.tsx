import { MasonryGrid } from '@/components/7_MasonryGrid-medium/components';
import { getMasonryGridFromAPI } from '@/data/data';

const MasonryGridPage = async () => {
  const data = await getMasonryGridFromAPI();
  const { images } = data;

  return <MasonryGrid images={images} />;
};

export default MasonryGridPage;
