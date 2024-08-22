import { MutableRefObject } from 'react';

export type TtypeOfT = 'string' | 'number' | 'object' | 'array' | 'unknown';

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

export type TUseMemo<T> = () => {
  infoReference: MutableRefObject<HTMLEmbedElement | null>;
  inputReference: MutableRefObject<HTMLTextAreaElement | null>;
  showRenderingInfo: () => void;
  handleTypeChange: (newType: TtypeOfT) => void;
  typeOfInput: T;
  handleValueChange: () => void;
  errorMessage: string;
};
