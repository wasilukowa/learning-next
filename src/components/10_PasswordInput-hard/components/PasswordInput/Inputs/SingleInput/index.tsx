'use client';

import { Active } from './Active';
import { Blocked } from './Blocked';
import { SingleInputProps } from './types';

import { useEffect } from 'react';

import style from './rwd.module.scss';
const { wrapper, wrapperInputNumber } = style;

export const SingleInput = ({
  character,
  index,
  handleInputCharacterSetting,
  handleSpecialKeys,
  passwordReference,
  passwordType,
}: SingleInputProps) => {
  useEffect(() => {
    const potentialReference = passwordReference.current;

    const potentialReferenceIsDefined = potentialReference !== null;
    if (!potentialReferenceIsDefined) return;
    const isIndexWithinLength = index < potentialReference.length;
    if (!isIndexWithinLength) return;
  }, []);

  const potentialReference = passwordReference.current;
  const potentialReferenceIsDefined = potentialReference !== null;
  if (!potentialReferenceIsDefined) return null;

  const isBlankInput = character === 'BLANK';
  if (isBlankInput)
    return (
      <div className={wrapper}>
        <Blocked
          inputReference={(reference) => {
            const isReferenceDefined = reference !== null;
            if (!isReferenceDefined) return;
            potentialReference[index] = reference;
          }}
        />
        <span className={wrapperInputNumber}>{index + 1}</span>
      </div>
    );

  return (
    <div className={wrapper}>
      <Active
        passwordType={passwordType}
        handleInputCharacterSetting={handleInputCharacterSetting}
        handleSpecialKeys={handleSpecialKeys}
        inputReference={(reference) => {
          const isReferenceDefined = reference !== null;
          if (!isReferenceDefined) return;
          potentialReference[index] = reference;
        }}
        index={index}
        character={character}
      />
      <span className={wrapperInputNumber}>{index + 1}</span>
    </div>
  );
};
