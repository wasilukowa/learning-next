export type TRoute = {
  name: string;
  id: string;
  url: string;
};

export type NavigationProps = {
  routes: TRoute[];
};
