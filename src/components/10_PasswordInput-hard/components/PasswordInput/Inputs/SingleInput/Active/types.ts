import { RefCallback } from "react";
import { SingleInputProps } from "../types";
import { AvailablePasswordTypes } from "../../../types";

export type ActiveProps = Pick<
  SingleInputProps,
  "character" | "index" | "handleInputCharacterSetting" | "handleSpecialKeys" 
> & {
  passwordType: AvailablePasswordTypes;
  inputReference: RefCallback<HTMLInputElement | null>;
};
