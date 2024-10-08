import { PaginatedTable } from '@/components/6_TableWithPagination-medium/components';
import { getPaginationDataFromAPI } from '@/data/data';

const PaginatedTablePage = async () => {
  const paginationData = await getPaginationDataFromAPI();
  const { headers, entriesOnPage, siblingCount, data } = paginationData;

  return (
    <PaginatedTable
      headers={headers}
      entriesOnPage={entriesOnPage}
      siblingCount={siblingCount}
      data={data}
    />
  );
};

export default PaginatedTablePage;
