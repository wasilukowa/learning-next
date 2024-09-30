import { MutableRefObject } from 'react';
import { TtypeOfInput } from '../types';

export type InputProps = {
  inputReference: MutableRefObject<HTMLInputElement | null>;
  textAreaReference: MutableRefObject<HTMLTextAreaElement | null>;
  typeOfInput: TtypeOfInput;
};
