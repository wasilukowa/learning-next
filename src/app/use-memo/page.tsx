import { UseMemoStateUsage } from '../../../_components/2_useMemoState-easy/components';

import data from '../../../data/homePageData.json';

export default function Page() {
  const { number, object, array, string } = data['use-memo'].data;

  return (
    <UseMemoStateUsage
      number={number}
      object={object}
      array={array}
      string={string}
    />
  );
}
