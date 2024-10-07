'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  checkIfPasswordValid,
  getEmptyPasswordArray,
  createEncryptedPasswordArray,
} from '../../utils';

import {
  AvailablePasswordTypes,
  AvailableDirectionTypes,
  TUsePassword,
} from './types';

import { useCookie } from './useCookiesHook';

export const usePassword = (password: string) => {
  const { saveCookie, getCookieValue } = useCookie();

  // TU JESZCZE OGARNĄĆ CO SIĘ DZIEJE JAK JEST JAK NIE MA CIASTECZKA....

  const passwordTypeCookieValue = getCookieValue('passwordType');

  const passwordEncrypted = createEncryptedPasswordArray(password);
  const passwordLength = password.length;

  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [
    isPasswordValidationInformationVisible,
    setPasswordValidationInformationVisible,
  ] = useState(false);

  const [passwordProvided, setPasswordProvided] = useState(
    getEmptyPasswordArray(passwordEncrypted),
  );

  // const [passwordType, setPasswordType] = useState<AvailablePasswordTypes>(cookieValue);
  const [passwordType, setPasswordType] = useState<AvailablePasswordTypes>(
    passwordTypeCookieValue,
  );

  // TO MOZE WYWALIC PROGRAM
  // const passwordReference = useRef<HTMLInputElement[] | null>(null);
  // const passwordReference = useRef<HTMLInputElement[]>([]);

  const passwordReference = useRef<Array<HTMLInputElement>>([]);

  const focusOnInput = useCallback(
    (index: number, direction: AvailableDirectionTypes = 'RIGHT'): void => {
      const potentialReference = passwordReference.current;

      console.log('password reference: ', passwordReference);
      console.log('password reference.current: ', passwordReference.current);

      const isPotentialReferenceDefined = passwordReference.current !== null;
      if (!isPotentialReferenceDefined) return;

      let newIndex = index + 1;

      const isNewIndexWithinPAsswordLength = newIndex < passwordLength;
      if (!isNewIndexWithinPAsswordLength) return;

      const isTryingToGoLeft = direction === 'LEFT';
      if (isTryingToGoLeft) newIndex = index - 1;

      const isNextInputAvailable = newIndex < passwordLength && newIndex >= 0;
      if (!isNextInputAvailable) return;

      const nextInputElement = potentialReference[newIndex];

      const isElementDefined = nextInputElement !== undefined;
      if (!isElementDefined) return;

      const isInputDisabled = nextInputElement.disabled;
      if (isInputDisabled) return focusOnInput(newIndex, direction);

      nextInputElement.focus();
    },
    [],
  );

  const handleInputCharacterSetting = useCallback(
    (character: string, index: number) => {
      const newArr = [...passwordProvided];

      newArr.splice(index, 1, character);
      setPasswordValidationInformationVisible(false);

      setPasswordProvided(newArr);

      const isPasswordRefferenceDefined =
        passwordReference.current.length !== 0;
      if (!isPasswordRefferenceDefined) return;

      const isValueProvided = !!character;

      const isNextInputAvailable = index < passwordLength;
      const isEligibleToSetCharacter = isValueProvided && isNextInputAvailable;
      if (isEligibleToSetCharacter) focusOnInput(index, 'RIGHT');
    },
    [passwordProvided],
  );

  const checkIfPasswordIsValid = useCallback(() => {
    const isPasswordValid = checkIfPasswordValid(password, passwordProvided);
    setIsPasswordValid(isPasswordValid);
    setPasswordValidationInformationVisible(true);
  }, [passwordProvided]);

  const toggleCharactersVisibility = useCallback(() => {
    const isPasswordRefferenceEmpty = passwordReference.current.length === 0;
    if (isPasswordRefferenceEmpty) return;

    const isPasswordType = passwordType === 'password';
    const newPasswordType = isPasswordType ? 'text' : 'password';

    setPasswordType(newPasswordType);

    saveCookie('passwordType', newPasswordType);

    passwordReference.current.map((element) => {
      element.type = newPasswordType;
    });
  }, [passwordType]);

  const cleanPasswordInputs = useCallback((): void => {
    const cleanedPassword = passwordProvided.map((character) => {
      if (character === 'BLANK') return 'BLANK';
      return '';
    });
    setPasswordProvided(cleanedPassword);
  }, []);

  const handleSpecialKeys = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      const isIndexValid = index >= 0 && index < passwordLength;
      if (!isIndexValid) return;

      const isKeyArrowLeft = e.code === 'ArrowLeft';
      const isKeyArrowRight = e.code === 'ArrowRight';

      if (isKeyArrowLeft) focusOnInput(index, 'LEFT');
      if (isKeyArrowRight) focusOnInput(index, 'RIGHT');
    },
    [],
  );

  useEffect(() => {
    const potentialReference = passwordReference.current;

    const isPasswordRefferenceEmpty = potentialReference.length === 0;
    if (isPasswordRefferenceEmpty) return;

    const firstInputElement = potentialReference[0];
    const isFirstInputElementDefined = firstInputElement !== undefined;
    if (!isFirstInputElementDefined) return;

    const isFirstElementBlocked = firstInputElement.disabled;
    if (isFirstElementBlocked) focusOnInput(0, 'RIGHT');

    firstInputElement.focus();

    const cookieValue = getCookieValue('passwordType');

    const isCookieValueInAvailablePasswordType =
      cookieValue === 'text' || cookieValue === 'password';
    if (isCookieValueInAvailablePasswordType) setPasswordType(cookieValue);
  }, []);

  return {
    passwordProvided,
    passwordReference,
    isPasswordValid,
    isPasswordValidationInformationVisible,
    passwordType,
    handleInputCharacterSetting,
    checkIfPasswordIsValid,
    toggleCharactersVisibility,
    cleanPasswordInputs,
    handleSpecialKeys,
  };
};
