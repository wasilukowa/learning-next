'use client';

import { useRef, useState } from 'react';

import {
  TSingleStep,
  THandleStepNumberChange,
  TUseMultistepForm,
} from './types';

import {
  createKeyValueObject,
  isValueValid,
  createErrorVisibilityObject,
} from '../utils';

// const inputIndexes = {
//   name: 0,
//   surname: 1,
//   address: 2,

// }

/*

Słownik kontekstowy:SENIOR - Senior Fullstack Typescript Developer i Next.js

Jesteś senior developerem piszącym w typescript backend i frontend, i nazywasz się SENIOR. Używasz najlepszych praktyk programistycznych takich jak DRY, KISS, Separation of Concerns.

Jesteś w trakcie rozwiązywania różnych problemów technicznych pisząc w Typescript i odpowiadania na pytania programistów. Służysz radom innym programistom.

Twoja rola polega na pisaniu kodu w Typescript i wsparcia innym programistom, przeglądaniu kodu oraz opracowywaniu najlepszych praktyk dla zespołu.

Twoim zadaniem jest przekazywanie jasnych i skutecznych instrukcji oraz porad w kontekście programowania w TypeScript i Next.js, GraphQL, Prisma, PostgreSQL.

Czy możemy zaczynać?

*/

// [].forEach((element, index) => index === inputIndexes[index])

export const useMultistepForm: TUseMultistepForm = (formData) => {
  const [answers, setAnswers] = useState(createKeyValueObject(formData, 'id'));

  const [currentStepNumber, setCurrentStepNumber] = useState(0);

  const [errorsVisibility, setErrorsVisibility] = useState(
    createErrorVisibilityObject(formData),
  );

  const singleStepReference = useRef<Array<HTMLInputElement> | null>(null);

  const validationRegexps = createKeyValueObject(formData, 'validationRegexp');
  const inputLabels = createKeyValueObject(formData, 'label');

  const singleStepData = formData[currentStepNumber] ?? ({} as TSingleStep);
  const singleStepQuestions = singleStepData.questions ?? [];

  const numberOfSteps = formData.length;

  const handleStepNumberChange: THandleStepNumberChange = (
    event,
    direction,
  ) => {
    event.preventDefault();

    if (direction === 'NEXT')
      setCurrentStepNumber((prevState) => {
        const isNextStepAvailable = currentStepNumber <= numberOfSteps;
        if (!isNextStepAvailable) return prevState;

        const areSingleStepAnswersValid = validate();
        // const areSingleStepAnswersValid = true;

        if (!areSingleStepAnswersValid) return prevState;

        return prevState + 1;
      });

    if (direction === 'PREV')
      setCurrentStepNumber((prevState) => {
        const isPrevStepAvailable = currentStepNumber > 0;
        if (!isPrevStepAvailable) return prevState;
        return prevState - 1;
      });
  };

  // const test = 'sdfsd';
  // if (!test) {
  //   return;
  // }

  const validate = () => {
    const isErrorsVisibilityObjectDefined = errorsVisibility !== undefined;

    if (!isErrorsVisibilityObjectDefined) {
      const initialErrorsObject = createErrorVisibilityObject(formData);
      setErrorsVisibility(initialErrorsObject);
    }

    return singleStepQuestions.reduce((acc, question, index) => {
      const potentialReference = singleStepReference.current;
      if (!potentialReference) return false;

      const singleQuestionReference = potentialReference[index];
      if (!singleQuestionReference) return false;

      // pelne zmienne
      const regex = validationRegexps[question.id];
      const isRegexValid = regex !== undefined && typeof regex === 'string';
      if (!isRegexValid) return false;

      const isValid = isValueValid(regex, singleQuestionReference.value);

      setErrorsVisibility((prevState) => {
        const updatedState = {
          ...prevState,
        };
        updatedState[question.id] = !isValid;

        return updatedState;
      });

      if (!isValid) return false;

      return acc;
    }, true);
  };

  const submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    console.log('wyslane');
  };

  const updateAnswers = (questionId: string, newValue: string) => {
    setAnswers((prevState) => {
      const updatedState = { ...prevState };
      updatedState[questionId] = newValue;
      return updatedState;
    });
  };

  return {
    currentStepNumber,
    numberOfSteps,
    handleStepNumberChange,
    submit,

    answers,
    updateAnswers,

    singleStepData,
    errorsVisibility,
    singleStepReference,
    inputLabels,
  };
};

// ------------------------------

// const currentInput = {
//   id: string,
//   title: string,
//   isValid: boolean,
//   errorMessage: string,
// }

// [
//   {
//     step:  [
//       {
//         id: string,
//         title: string,
//         isValid: boolean,
//         errorMessage: string,

//       },{
//         id: string,
//         title: string,
//         isValid: boolean,
//         errorMessage: string,

//       }
//     ],
//     isValid: boolean

//   }, {

//   }
// ]

// [

//  , [
//     {
//       id: string,
//       title: string,
//       isValid: boolean,
//       errorMessage: string,

//     },{
//       id: string,
//       title: string,
//       isValid: boolean,
//       errorMessage: string,

//     }
//   ]
// ]
