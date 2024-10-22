import { SearchWithDropdown } from '../../components/5_SearchWithDropdown-medium/components';
import { getSearchDataAPI } from '../../data/data';

export default async function Search() {
  const searchData = await getSearchDataAPI();
  const { data, labels } = searchData;

  return <SearchWithDropdown data={data} labels={labels} />;
}
