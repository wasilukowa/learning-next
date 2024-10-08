export const getDataFromAPI = async (path: string, signal: AbortSignal) => {
  try {
    const data = await fetch(path, {
      cache: 'force-cache',
      signal,
    });
    return data.json();
  } catch (error) {
    if (error instanceof Error) {
      const isAbortedError = error.name === 'AbortError';
      if (isAbortedError) {
        console.log('Fetch was aborted. ');
        return;
      }
      throw new Error(`Failed to fetch data from "${path}", ${error}`);
    }
  }
};

// export const getNavigationItemsFromAPI = () =>
//   getDataFromAPI('http://localhost:3001/api/data/navigationMenu');

export const getRatingStarsFromAPI = async () => {
  try {
    const controller = new AbortController();
    const { signal } = controller;

    new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await getDataFromAPI(
      'http://localhost:3001/api/data/ratingStars',
      signal,
    );
    controller.abort();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getSearchDataAPI = async () => {
  try {
    const controller = new AbortController();
    const { signal } = controller;

    new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await getDataFromAPI(
      'http://localhost:3001/api/data/searchData',
      signal,
    );
    controller.abort();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getPaginationDataFromAPI = async () => {
  try {
    const controller = new AbortController();
    const { signal } = controller;

    new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await getDataFromAPI(
      'http://localhost:3001/api/data/pagination-table',
      signal,
    );
    controller.abort();
    return data;
  } catch (err) {
    console.error(err);
  }
};
