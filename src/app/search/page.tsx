import { SearchWithDropdown } from '../../components/5_SearchWithDropdown-medium/components';
import { getSearchDataAPI } from '../lib/data';

export default async function Search() {
  const data = await getSearchDataAPI();

  return <SearchWithDropdown data={data.data.data} labels={data.data.labels} />;
}
