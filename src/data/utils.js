export const createNavigationData = (data) => {
  const navigationItems = [];
  Object.keys(data).forEach((key) => {
    const item = data[key];
    const newItem = {
      name: item.name,
      id: item.id,
      url: item.url,
    };
    navigationItems.push(newItem);
  });

  return navigationItems;
};

import data from './homePageData.json' assert { type: 'json' };

export const createDataEndpoint = (app, path, key) => {
  app.get(path, (req, res) => {
    res.json(data[key]?.data || {});
  });
};
