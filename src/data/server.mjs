import express from 'express';

import data from './homePageData.json' assert { type: 'json' };

import { createNavigationData, createDataEndpoint } from './utils.js';

const app = express();
const PORT = 3001;

const navigationData = createNavigationData(data);

app.get('/api/data/navigationMenu', (req, res) => {
  res.json(navigationData);
});

const endpoints = [
  { path: '/api/data/ratingStars', key: 'ratingStars' },
  { path: '/api/data/useGeo', key: 'useGeo' },
  { path: '/api/data/modal', key: 'modal' },
  { path: '/api/data/searchData', key: 'searchWithDropdown' },
  { path: '/api/data/pagination-table', key: 'tableWithPagination' },
  { path: '/api/data/masonry-grid', key: 'masonryGrid' },
  { path: '/api/data/intersection-observer', key: 'useIntersectionObserver' },
  {
    path: '/api/data/infinite-human-list',
    key: 'infinitpasswordInputeHumanList',
  },
  { path: '/api/data/password-input', key: 'passwordInput' },
  { path: '/api/data/multistep-form', key: 'multistepForm' },
];

endpoints.forEach(({ path, key }) => createDataEndpoint(app, path, key));

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
