'use client';

import { useGeo } from '../../hooks/useGeo';
import { UseGeoUsageExampleProps } from './types';

import style from './rwd.module.scss';
import { Coordinates } from './Coordinates';
import { useEffect, useState } from 'react';
const { wrapper, buttonGlobal } = style;

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

  return (
    <div className={wrapper}>
      <button className={buttonGlobal} onClick={toggleListening}>
        {correctTextByLocation}
      </button>
      {isBusy && <p> {loadingLabel} </p>}
      {isGeoListening && (
        <Coordinates
          longitudeLabel={longitudeLabel}
          latitudeLabel={latitudeLabel}
          longitude={location.longitude}
          latitude={location.latitude}
        />
      )}
    </div>
  );
};
