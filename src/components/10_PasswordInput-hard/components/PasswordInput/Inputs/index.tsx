import { SingleInput } from "./SingleInput";
import { InputsProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper } = style;

export const Inputs = ({
  passwordProvided,
  handleInputCharacterSetting,
  passwordType,
  passwordReference,
  handleSpecialKeys,
}: InputsProps) => {
  
  return (
    <div className={wrapper}>
      {passwordProvided.map((character, index) => {
        return (
          <SingleInput
            key={`input_${index}`}
            character={character}
            index={index}
            handleInputCharacterSetting={handleInputCharacterSetting}
            handleSpecialKeys={handleSpecialKeys}
            passwordReference={passwordReference}
            passwordType={passwordType}
          />
        );
      })}
    </div>
  );
};
