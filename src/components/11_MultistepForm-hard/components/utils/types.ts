import { TForm } from "../MultistepForm/types";

export type TCreateAnswersList = (formData: TForm) => TKeyValueObject;

export type TErrorMessagesVisibilityArray = boolean[][];

export type TIsValueValid = (regex: string, value: string) => boolean;

export type TAvailableKeys = 'id' | 'validationMessage' | 'validationRegexp' | 'label';

export type TKeyValueObject = {
    [key: string]: string | number;
}

export type TErrorVisibility = {
    [key: string]: boolean;
}