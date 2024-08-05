export type UseMemoStateUsageProps = {
  number: {
    buttonLabel: string;
    initialValue: number;
    newValue: number;
  };
  object: {
    buttonLabel: string;
    initialValue: Record<string, unknown>;
    newValue: Record<string, unknown>;
  };
  array: {
    buttonLabel: string;
    initialValue: unknown[];
    newValue: unknown[];
  };
  string: {
    buttonLabel: string;
    initialValue: string;
    newValue: string;
  };
};
