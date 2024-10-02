import { PaginatedTable } from '@/components/6_TableWithPagination-medium/components';
import { getPaginationDataFromAPI } from '@/lib/data';

const PaginatedTablePage = async () => {
  const paginationData = await getPaginationDataFromAPI();
  console.log(paginationData);
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
