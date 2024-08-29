import { MutableRefObject } from 'react';
import { InputProps } from './Input/types';

export type TtypeOfInput = 'string' | 'number' | 'object' | 'array' | 'unknown';

export type TNumber = {
  buttonLabel: string;
  initialValue: number;
  newValue: number;
};

export type TObject = {
  buttonLabel: string;
  initialValue: Record<string, unknown>;
  newValue: Record<string, unknown>;
};

export type TArray = {
  buttonLabel: string;
  initialValue: unknown[];
  newValue: unknown[];
};

export type TString = {
  buttonLabel: string;
  initialValue: string;
  newValue: string;
};

export type UseMemoStateUsageProps = {
  number: TNumber;
  object: TObject;
  array: TArray;
  string: TString;
};

export type UseMemoReturn<T> = {
  infoReference: MutableRefObject<HTMLEmbedElement | null>;
  inputReference: Pick<InputProps, 'reference'>;
  showRenderingInfo: () => void;
  handleTypeChange: (newType: T) => void;
  typeOfInput: T;
  handleMemorizeItButton: () => void;
  errorMessage: string;
};

export type TUseMemo<T> = () => UseMemoReturn<T>;
