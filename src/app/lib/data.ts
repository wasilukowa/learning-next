export const getDataFromAPI = async (path: string) => {
  try {
    const data = await fetch(path, {
      // cache: 'force-cache',
    });
    console.log('data:', data);
    return data.json();
  } catch (error) {
    throw new Error(`Failed to fetch data from "${path}", ${error}`);
  }
};

export const getNavigationItemsFromAPI = () =>
  getDataFromAPI('http://localhost:3001/api/data/navigationMenu');

export const getRatingStarsFromAPI = async () => {
  const data = await getDataFromAPI(
    'http://localhost:3001/api/data/ratingStars',
  );
  return data;
};
