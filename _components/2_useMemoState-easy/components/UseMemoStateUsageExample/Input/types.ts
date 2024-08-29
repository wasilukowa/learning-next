import { MutableRefObject } from 'react';
import { TtypeOfInput } from '../types';

export type InputProps = {
  reference: MutableRefObject<HTMLTextAreaElement | null>;
  typeOfInput: TtypeOfInput;
};
