import { TKeyValueObject, TErrorVisibility } from "../../utils/types";
import { TSingleStep, TSingleStepReference, TUpdateAnswers } from "../types";

export type SingleStepProps = {
    isVisible: boolean,
    answers: TKeyValueObject,
    updateAnswers: TUpdateAnswers,
    errorsVisibility: TErrorVisibility,
    singleStepReference: TSingleStepReference,
    singleStepData: TSingleStep, 
    inputLabels: TKeyValueObject
};