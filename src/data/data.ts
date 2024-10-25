const getDataFromAPI = async (path: string, signal: AbortSignal) => {
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
// Funkcja pomocnicza do obsługi wywołań API z AbortController
const fetchDataWithAbort = async (path: string, timeout: number = 2000) => {
  const controller = new AbortController();
  const { signal } = controller;

  // Ustaw timeout
  setTimeout(() => controller.abort(), timeout);

  try {
    return await getDataFromAPI(path, signal);
  } catch (err) {
    console.error(`Error fetching data from ${path}:`, err);
  }
};

// Funkcje wywołujące API
export const getNavigationItemsFromAPI = () =>
  fetchDataWithAbort('http://localhost:3001/api/data/navigationMenu');
export const getRatingStarsFromAPI = () =>
  fetchDataWithAbort('http://localhost:3001/api/data/ratingStars');
export const getUseGeoDataFromAPI = () =>
  fetchDataWithAbort('http://localhost:3001/api/data/useGeo');
export const getSearchDataAPI = () =>
  fetchDataWithAbort('http://localhost:3001/api/data/searchData');
export const getPaginationDataFromAPI = () =>
  fetchDataWithAbort('http://localhost:3001/api/data/pagination-table');
export const getModalDataFromAPI = () =>
  fetchDataWithAbort('http://localhost:3001/api/data/modal');
export const getMasonryGridFromAPI = () =>
  fetchDataWithAbort('http://localhost:3001/api/data/masonry-grid');
export const getIntersectionObserverDataFromAPI = () =>
  fetchDataWithAbort('http://localhost:3001/api/data/intersection-observer');
export const getInfiniteHumanListData = () =>
  fetchDataWithAbort('http://localhost:3001/api/data/infinite-human-list');
export const getPasswordInputDataFromAPI = () =>
  fetchDataWithAbort('http://localhost:3001/api/data/password-input');
export const getMultistepFormData = () =>
  fetchDataWithAbort('http://localhost:3001/api/data/multistep-form');
