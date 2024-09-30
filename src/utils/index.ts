// TCreateRoutesObject

// export type TCreateRoutesObject = (
//   data: TData,
//   components: TComponents,
// ) => TRoute[];

type TRoute = {
  name: string;
  id: string;
  url: string;
};

type TCreateRoutesObjectReturn = TRoute[];

// do poprawy!!!!!!

type TCreateRoutesObject = (data: any) => TCreateRoutesObjectReturn;

export const createRoutesObject: TCreateRoutesObject = (data) => {
  const routes = [];
  for (const item in data) {
    const singleRoute = {
      name: data[item].name,
      id: data[item].id,
      url: data[item].url,
    };

    routes.push(singleRoute);
  }

  return routes;
};
