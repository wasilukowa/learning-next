import { UseGeoUsageExample } from '../../components/3_useGeo-easy/components';

import data from '../../data/homePageData.json';

export default function UseGeoPage() {
  const geoLabels = data['use-geo'].data.labels;

  return <UseGeoUsageExample labels={geoLabels} />;
}
