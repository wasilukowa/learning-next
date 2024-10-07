import { TQuestion, TSingleStepReference, TUpdateAnswers } from "../../types";

export type TextInputProps = {
    updateAnswers: TUpdateAnswers, 
    isErrorVisible: boolean, 
    value: string | number, 
    singleFormStepReference: TSingleStepReference, 
    index: number, 
    inputData: TQuestion
}