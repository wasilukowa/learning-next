import { TtypeOfInput } from '../types';

export type InputSelectionProps = {
  typeOfInput: TtypeOfInput;
  handleTypeChange: (newType: TtypeOfInput) => void;
};
