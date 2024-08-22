import { TtypeOfT } from '../types';

export type InputSelectionProps = {
  typeOfInput: TtypeOfT;
  handleTypeChange: (newType: TtypeOfT) => void;
};
