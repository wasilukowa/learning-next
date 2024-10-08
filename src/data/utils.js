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
