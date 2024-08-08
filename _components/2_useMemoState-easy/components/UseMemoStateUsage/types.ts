import { MutableRefObject, Reference } from 'react';

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

export type TUseMemo<T> = (value: T) => {
  infoReference: MutableRefObject<HTMLEmbedElement | null>;
  showRenderingInfo: () => void;
  value: T;
  handleValueChange: (newValue: T) => void;
};
