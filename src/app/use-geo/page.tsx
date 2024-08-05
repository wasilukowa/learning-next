import { UseGeoUsageExample } from '../../../_components/3_useGeo-easy/components';

import data from '../../../data/homePageData.json';

export default function UseGeoPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const ratingsJson = data['use-geo'].data.labels;

  return (
    <>
      <UseGeoUsageExample labels={ratingsJson} />
    </>
  );
}
