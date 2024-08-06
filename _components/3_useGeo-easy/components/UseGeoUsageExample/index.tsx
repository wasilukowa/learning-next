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

  const [jsEnabled, setJsEnabled] = useState(false);

  useEffect(() => {
    setJsEnabled(true);
  }, []);

  const { location, isGeoListening, toggleListening, isBusy } = useGeo();

  const correctTextByLocation = isGeoListening ? buttonOnLabel : buttonOffLabel;

  if (!jsEnabled) {
    return <p>{errorMessage}</p>;
  }

  const longitude = location.longitude ? location.longitude : '';
  const latitude = location.latitude ? location.latitude : '';

  return (
    <div className={wrapper}>
      <button
        className={`${wrapperButton} button-default`}
        onClick={toggleListening}
      >
        {correctTextByLocation}
      </button>
      {isBusy && <p> {loadingLabel} </p>}
      {isGeoListening && (
        <Coordinates
          longitudeLabel={longitudeLabel}
          latitudeLabel={latitudeLabel}
          longitude={longitude}
          latitude={latitude}
        />
      )}
    </div>
  );
};
