'use client';

import { ProgressBar } from './ProgressBar';
import { SingleStep } from './SingleStep';
import { Controls } from './Controls';
import { useMultistepForm } from './useMultistepForm';

import { MultistepFormProps } from './types';

import styles from './rwd.module.scss';
const { wrapper, wrapperForm } = styles;

export const MultistepForm = ({
  formData,
  navigationLabels,
}: MultistepFormProps) => {
  const {
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
  } = useMultistepForm(formData);

  return (
    <div className={wrapper}>
      <ProgressBar
        currentStep={currentStepNumber}
        numberOfSteps={numberOfSteps}
        stepNaming={navigationLabels['stepNaming']}
      />

      <form className={wrapperForm}>
        <SingleStep
          isVisible={currentStepNumber !== numberOfSteps}
          answers={answers}
          updateAnswers={updateAnswers}
          singleStepReference={singleStepReference}
          key={`form_${currentStepNumber}`}
          singleStepData={singleStepData}
          errorsVisibility={errorsVisibility}
          inputLabels={inputLabels}
        />
        <Controls
          labels={navigationLabels}
          handleStepNumberChange={handleStepNumberChange}
          currentStepNumber={currentStepNumber}
          numberOfSteps={numberOfSteps}
          submit={submit}
        />
      </form>
    </div>
  );
};
