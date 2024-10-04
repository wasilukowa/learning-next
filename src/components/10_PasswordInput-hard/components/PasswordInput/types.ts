import { KeyboardEvent, MutableRefObject } from "react";
import { ActionButtonsChache } from "./ActionButtons/types";
import { InvalidPasswordInformationProps } from "./InvalidPasswordInformation/types";
import { ValidPasswordInformationProps } from "./ValidPasswordInformation/types";

export type AvailablePasswordTypes = "text" | "password";
export type AvailableDirectionTypes = "RIGHT" | "LEFT"; 

export type PasswordInputProps = {
  password: AvailablePasswordTypes;
  buttonLabels: ActionButtonsChache;
  statements: InvalidPasswordInformationProps & ValidPasswordInformationProps;
};

export type TCharacter = string | "BLANK";

export type UsePasswordReturn = {
  passwordProvided: TCharacter[];
  passwordReference: MutableRefObject<null | HTMLInputElement[]>;
  isPasswordValid: boolean;
  isPasswordValidationInformationVisible: boolean;
  passwordType: AvailablePasswordTypes;

  handleInputCharacterSetting: (character: string, index: number) => void;
  checkIfPasswordIsValid: () => void;
  toggleCharactersVisibility: () => void;
  cleanPasswordInputs: () => void;
  handleSpecialKeys: (
    e: KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => void;
};

export type TUsePassword = (password: string) => UsePasswordReturn;

export type TCookieOptions = {
  expires?: Date,
  maxAge?: number
};


export type TUseCookies = (cookieName: string) => TUseCookieReturn;

export type TUseCookieReturn = {
  cookieValue: AvailablePasswordTypes,
  saveCookie: (value: string, options?: TCookieOptions) => void,
  deleteCookie: () => void,
  getCookieValue: (name: string) => string
}
