import { TForm } from "../MultistepForm/types";
import { TIsValueValid, TKeyValueObject, TAvailableKeys, TErrorVisibility } from "./types";

export const createKeyValueObject = (formData: TForm, key: TAvailableKeys) => {

    // reduce
    const answers: TKeyValueObject = {}
    
    formData.forEach((singleFormPageData) => {
        const singleStepQuestions = singleFormPageData.questions;
        if (!singleStepQuestions) return;

        singleStepQuestions.forEach((question) => {
            if (key === 'id') {
                answers[`${question.id}`] = '';
                return;
            }

            answers[`${question.id}`] = question[key];
        });
    });
    
    return answers;
};


export const createErrorVisibilityObject = (formData: TForm) => {
    // reduce XD
    const errorVisibilityList:TErrorVisibility = {}
    
    formData.forEach((singleFormPageData) => {
        const singleStepQuestions = singleFormPageData.questions;
        if (!singleStepQuestions) return;

        singleStepQuestions.forEach((question) => {
            errorVisibilityList[`${question.id}`] = false;
        });
    });
    
    return errorVisibilityList;
};


export const isValueValid: TIsValueValid = (regex, value) => {

    const regexp = regex ?? '';
    const regExp = new RegExp(regexp);

    const isValueValid = !!value && !!regExp && regExp.test(value);

    return isValueValid;
};