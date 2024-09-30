import { TProduct } from "../../types";

export type SearchWithDropdownProps = {
  data: TProduct[];
  labels: {
    loading: string;
    noResults: string;
    toShortQuery: string;
  };
};
