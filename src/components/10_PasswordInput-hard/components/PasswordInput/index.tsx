'use client';

import { usePassword } from './usePasswordInputHook';

import { PasswordInputProps } from './types';

import { Inputs } from './Inputs';
import { ValidPasswordInformation } from './ValidPasswordInformation';
import { InvalidPasswordInformation } from './InvalidPasswordInformation';
import { ActionButtons } from './ActionButtons';

import styles from './rwd.module.scss';
const { wrapper, wrapperInner, wrapperInformation } = styles;

// 1) -> click w Submit button
// 2) -> debounce / throttle -> 700 -> validation -> potentialErrorMessages

export const PasswordInput = ({
  password,
  buttonLabels,
  statements,
}: PasswordInputProps) => {
  const {
    passwordProvided,
    passwordReference,
    handleInputCharacterSetting,
    checkIfPasswordIsValid,
    isPasswordValid,
    passwordType,
    toggleCharactersVisibility,
    isPasswordValidationInformationVisible,
    cleanPasswordInputs,
    handleSpecialKeys,
  } = usePassword(password);

  console.log('PASSWORD TYPE: ', passwordType);

  if (isPasswordValid)
    return (
      <ValidPasswordInformation
        validPasswordStatement={statements.validPasswordStatement}
      />
    );

  return (
    <section className={wrapper}>
      <div className={wrapperInner}>
        <Inputs
          passwordProvided={passwordProvided}
          handleInputCharacterSetting={handleInputCharacterSetting}
          passwordType={passwordType}
          passwordReference={passwordReference}
          handleSpecialKeys={handleSpecialKeys}
        />

        <div className={wrapperInformation}>
          {isPasswordValidationInformationVisible && (
            <InvalidPasswordInformation
              invalidPasswordStatement={statements.invalidPasswordStatement}
            />
          )}
        </div>

        <ActionButtons
          showCharactersLabel={buttonLabels.showCharactersLabel}
          cleanInputsLabel={buttonLabels.cleanInputsLabel}
          checkIfValidLabel={buttonLabels.checkIfValidLabel}
          toggleCharactersVisibility={toggleCharactersVisibility}
          checkIfPasswordIsValid={checkIfPasswordIsValid}
          cleanPasswordInputs={cleanPasswordInputs}
          passwordType={passwordType}
        />
      </div>
    </section>
  );
};
