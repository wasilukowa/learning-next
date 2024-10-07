// Hasło powinno mieć co najmniej długość 8 znaków
// Aktywnych pól powinno być maksymalnie połowę długości hasła a minimalnie 2

import { TCookieOptions } from "../components/PasswordInput/types";
import { TPasswordArray } from "./types";

export const createEncryptedPasswordArray = (
  password: string,
): TPasswordArray => {
  const passwordArray = password.split("");
  const passwordLength = password.length;

  let blankCounter = 0;

  const encryptedArray = passwordArray.map((character) => {
    const isHidden = getRandomBoolean();
    if (isHidden) {
      blankCounter++;
      return "BLANK";
    }
    return character;
  });

  const minBlankInputs = 2;
  const maxBlankInputs = passwordLength / 2;
  const isNumberOfBlankInputsValid =
    blankCounter > minBlankInputs && blankCounter <= maxBlankInputs;

  if (isNumberOfBlankInputsValid) return encryptedArray;
    
  return createEncryptedPasswordArray(password);
  
};

export const getEmptyPasswordArray = (
  encrypted: TPasswordArray,
): TPasswordArray => {
  const emptyPasswordArray = encrypted.map((character) => {
    if (character === "BLANK") return "BLANK";
    return "";
  });
  return emptyPasswordArray;
};

export const checkIfPasswordValid = (
  password: string,
  passwordProvided: TPasswordArray,
): boolean => {
  const passwordArray = password.split("");
  if (passwordArray.length !== passwordProvided.length) return false;

  const isPasswordValid = passwordProvided.reduce(
    (accumulator, element, index) => {
      const isBlank = element === "BLANK";
      if (isBlank) return accumulator;

      if (element !== passwordArray[index]) {
        return false;
      }
      return accumulator;
    },
    true,
  );

  return isPasswordValid;
};

const getRandomIntInclusive = (min: number, max: number): number => {
  const isMinMaxValuesValid = min <= max;
  if (!isMinMaxValuesValid) return 0;

  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  const randomNumber = Math.floor(
    Math.random() * (maxFloor - minCeil + 1) + minCeil,
  );

  return randomNumber;
};

const getRandomBoolean = (): boolean => {
  const randomNumber = getRandomIntInclusive(0, 1);
  return Boolean(randomNumber);

  // if (randomNumber === 1) return false;
  // return true;
};

export const stringifyCookieDetails = (name: string, value: string, options: TCookieOptions) => {

  let expiryDate = '';
  const potentialOptionsExpiryDate = options.expires;
  const isExpiryDateDefined = potentialOptionsExpiryDate !== undefined;
  if (isExpiryDateDefined) expiryDate = potentialOptionsExpiryDate.toUTCString();
  
  let maxAge = '';
  const optionsMaxAge = options.expires;
  const isMaxAgeDefined = optionsMaxAge !== undefined;
  if (isMaxAgeDefined) maxAge = optionsMaxAge.toString();
  
  const cookieDetails = `${name}=${value}; expires=${expiryDate}; max-age=${maxAge}`;

  return cookieDetails;
}
