import { TProduct } from "../types";

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
