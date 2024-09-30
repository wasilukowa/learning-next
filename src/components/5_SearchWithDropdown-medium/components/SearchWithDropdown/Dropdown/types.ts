import { TProduct } from "../../../types";

export type DropdownListProps = {
  foundData: TProduct[];
  phrase: string;
  isBusy: boolean;
  labels: {
    loading: string;
    noResults: string;
    toShortQuery: string;
  };
};
