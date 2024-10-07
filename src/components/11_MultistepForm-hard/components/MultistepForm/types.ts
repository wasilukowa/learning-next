import { TKeyValueObject, TErrorVisibility } from './../utils/types';

type AvailableInputTypes = 'text' | 'number' | 'textArea' | 'email';

export type TQuestion = {
  id: string;
  type: AvailableInputTypes;
  name: string;
  label: string;
  validationMessage: string;
  validationRegexp: string;
};

export type TSingleStep = {
  title: string;
  questions: TQuestion[];
};

export type TForm = TSingleStep[];

export type AvailabeDirectionTypes = 'NEXT' | 'PREV';

export type TMultistepLabels = {
  nextButtonLabel: string;
  prevButtonLabel: string;
  submitButtonLabel: string;
  stepNaming: string;
  summaryNaming: string;
};

export type MultistepFormProps = {
  navigationLabels: TMultistepLabels;
  // form: TForm,
  formData: TSingleStep[];
};

export type TUpdateAnswers = (questionId: string, newValue: string) => void;

export type TSingleStepReference =
  | React.MutableRefObject<null | HTMLInputElement[]>
  | undefined;
export type THandleStepNumberChange = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  direction: AvailabeDirectionTypes,
) => void;
export type TSubmit = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) => void;

export type UseMultistepFormReturn = {
  currentStepNumber: number;
  numberOfSteps: number;
  handleStepNumberChange: THandleStepNumberChange;
  submit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  answers: TKeyValueObject;
  updateAnswers: TUpdateAnswers;

  singleStepData: TSingleStep;
  errorsVisibility: TErrorVisibility;
  singleStepReference: TSingleStepReference;
  inputLabels: TKeyValueObject;
};

export type TUseMultistepForm = (
  formData: TSingleStep[],
) => UseMultistepFormReturn;
