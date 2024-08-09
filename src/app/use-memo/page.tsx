import { UseMemoStateUsageExample } from '../../../_components/2_useMemoState-easy/components';

import data from '../../../data/homePageData.json';

export default function UseMemoStateUsageExamplePage() {
  const { number, object, array, string } = data['use-memo'].data;

  return (
    <UseMemoStateUsageExample />
    // number={number}
    // object={object}
    // array={array}
    // string={string}
  );
}
