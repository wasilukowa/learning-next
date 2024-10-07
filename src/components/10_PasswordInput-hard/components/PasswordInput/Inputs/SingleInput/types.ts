import { LegacyRef, MutableRefObject, RefCallback } from "react";
import { AvailablePasswordTypes, UsePasswordReturn } from "../../types";

// Typescript -> UtilityTypes -> Omit, Pick, Extract, ReturnType

export type SingleInputProps = Pick<
  UsePasswordReturn,
  "handleSpecialKeys" | "handleInputCharacterSetting" | "passwordReference"
> & {
  character: string;
  index: number;
  passwordType: AvailablePasswordTypes;
};
