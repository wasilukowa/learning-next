type TSingleDataItemInformation = {
  name: string;
  id: string;
  url: string;
};

type TData = {
  // home: TSingleDataItemInformation & {
  //   data: any;
  // {
  //   header: HeaderCacheProps;
  //   home: HomeProps;
  // };
  // };
  ratingStars: TSingleDataItemInformation & {
    data: any;
    // data: RatingStarsProps;
  };
  useMemo: TSingleDataItemInformation & {
    data: any;

    // data: UseMemoStateUsageProps;
  };
  useGeo: TSingleDataItemInformation & {
    data: any;
    // data: UseGeoUsageExampleProps;
  };
  modal: TSingleDataItemInformation & {
    data: any;
    // data: ModalUsageExampleProps;
  };
  searchWithDropdown: TSingleDataItemInformation & {
    data: any;
    // data: SearchWithDropdownProps;
  };
  tableWithPagination: TSingleDataItemInformation & {
    data: any;
    // data: PaginatedTableProps;
  };
  masonryGrid: TSingleDataItemInformation & {
    data: any;
    // data: MasonryGridProps;
  };
  useIntersectionObserver: TSingleDataItemInformation & {
    data: any;
    // data: TIntersectionObserverToAddClassUsageProps;
  };
  infiniteHumanList: TSingleDataItemInformation & {
    data: any;
    // data: InfiniteHumanListProps;
  };
  passwordInput: TSingleDataItemInformation & {
    data: any;
    // data: PasswordInputProps;
  };
  multistepForm: TSingleDataItemInformation & {
    data: any;
    // data: MultistepFormProps;
  };
};

import { Application } from 'express';
export const createNavigationData = (data: TData) => {
  const navigationItems: TSingleDataItemInformation[] = [];
  Object.keys(data).forEach((key) => {
    const item = data[key as keyof TData];
    const newItem = {
      name: item.name,
      id: item.id,
      url: item.url,
    };
    navigationItems.push(newItem);
  });
};

import data from './homePageData.json' assert { type: 'json' };

export const createDataEndpoint = (
  app: Application,
  path: string,
  key: string,
) => {
  app.get(path, (req, res) => {
    res.json(data[key]?.data || {});
  });
};
