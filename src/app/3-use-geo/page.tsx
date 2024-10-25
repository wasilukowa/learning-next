import { UseGeoUsageExample } from '@/components/3_useGeo-easy/components';
import { getUseGeoDataFromAPI } from '@/data/data';

export default async function UseGeoPage() {
  const data = await getUseGeoDataFromAPI();
  const { labels } = data;

  return <UseGeoUsageExample labels={labels} />;
}
