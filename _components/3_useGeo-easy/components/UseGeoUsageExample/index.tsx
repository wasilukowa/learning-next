'use client';

import { useGeo } from './useGeo';
import { UseGeoUsageExampleProps } from './types';

import { Coordinates } from './Coordinates';
import { useEffect, useState } from 'react';

import style from './rwd.module.scss';
const { wrapper, wrapperButton } = style;

export const UseGeoUsageExample = ({ labels }: UseGeoUsageExampleProps) => {
  const {
    buttonOnLabel,
    buttonOffLabel,
    loadingLabel,
    latitudeLabel,
    longitudeLabel,
    errorMessage,
  } = labels;

  const { latitude, longitude, isGeoListening, toggleListening, isBusy } =
    useGeo();
  const correctTextByLocation = isGeoListening ? buttonOnLabel : buttonOffLabel;

  const isLongitudeDefined = typeof longitude === 'number';
  const isLatitudeDefined = typeof latitude === 'number';
  const areCoordsDefined = isLongitudeDefined && isLatitudeDefined;

  return (
    <div className={wrapper}>
      <button
        className={`${wrapperButton} button-default`}
        onClick={toggleListening}
      >
        {correctTextByLocation}
      </button>
      {isBusy && <p> {loadingLabel} </p>}
      {isGeoListening && areCoordsDefined && (
        <Coordinates
          latitude={latitude}
          latitudeLabel={latitudeLabel}
          longitude={longitude}
          longitudeLabel={longitudeLabel}
        />
      )}
    </div>
  );
};
