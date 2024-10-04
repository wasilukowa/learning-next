import { ActiveProps } from "./types";
import { useCookies } from "../../../useCookiesHook";

import style from "./rwd.module.scss";
const { wrapper } = style;

export const Active = ({
  character,
  index,
  handleInputCharacterSetting,
  handleSpecialKeys,
  passwordType,
  inputReference,
}: ActiveProps) => {

  return (
    <input
      ref={inputReference}
      className={wrapper}
      maxLength={1}
      value={character}
      type = {passwordType}
      onChange={(e) => handleInputCharacterSetting(e.target.value, index)}
      onKeyDown={(e) => handleSpecialKeys(e, index)}
    />
  );
};
