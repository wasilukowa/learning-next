export type TProduct = {
  name: string;
  regularPrice: number;
  salePrice: number;
  currency: string;
  id: string;
};

export type SearchWithDropdownProps = {
  data: TProduct[];
  labels: {
    loading: string;
    noResults: string;
    toShortQuery: string;
  };
};

export type UseSearchProps = TProduct[];

export type TDebounceChangeHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
) => void;

export type UseSearchReturn = {
  isBusy: boolean;
  phrase: string;
  result: TProduct[];
  isDropdownVisible: boolean;
  debouncedChangeHandler: TDebounceChangeHandler;
};
