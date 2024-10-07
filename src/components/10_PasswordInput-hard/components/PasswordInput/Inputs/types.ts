import { AvailablePasswordTypes, UsePasswordReturn } from "../types";

export type InputsProps = Pick<
  UsePasswordReturn,
  | "passwordProvided"
  | "passwordReference"
  | "handleInputCharacterSetting"
  | "handleSpecialKeys"
> & {
  passwordType: AvailablePasswordTypes
};
