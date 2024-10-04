import { Button } from './Button';
import { NavigationButtonsProps } from './types';

import styles from './rwd.module.scss';

const { wrapper } = styles;

export const NavigationButtons = ({
  labels,
  currentStep,
  numberOfSteps,
  handleStepNumberChange,
}: NavigationButtonsProps) => {
  const isPrevButtonActive = currentStep !== 0;
  const isNextButtonActive = currentStep !== numberOfSteps;

  return (
    <div className={wrapper}>
      <Button
        isActive={isPrevButtonActive}
        direction="PREV"
        onClickAction={handleStepNumberChange}
        label={labels['prev-button-label']}
      />
      <Button
        isActive={isNextButtonActive}
        direction="NEXT"
        onClickAction={handleStepNumberChange}
        label={labels['next-button-label']}
      />
    </div>
  );
};
