import { useState, useEffect, useCallback } from 'react';

import { getLocation } from '../../utils';

import { TCoordinates } from '../UseGeoUsageExample/types';
import { TUseGeo } from './types';

export const useGeo: TUseGeo = () => {
  const [isGeoListening, setIsGeoListening] = useState(false);

  const [isBusy, setIsBusy] = useState(false);

  const [location, setCoordinates] = useState<TCoordinates>({
    longitude: null,
    latitude: null,
    error: '',
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (isGeoListening) {
      getLocation()
        .then((location) =>
          setCoordinates({
            longitude: location.longitude,
            latitude: location.latitude,
            error: '',
          }),
        )
        .catch((error) => {
          setCoordinates((prevState) => {
            return {
              ...prevState,
              error: 'Something went wrong. Please try again later...' + error,
            };
          });
        })
        .finally(() => {
          setIsBusy(false);
        });
    }

    // const stringi = 'qwe'
    // if(stringi === null) return
    // stringi.toUpperCase()

    setCoordinates({
      longitude: null,
      latitude: null,
      error: null,
    });
  }, [isGeoListening]);

  const toggleListening = useCallback(() => {
    setIsGeoListening(!isGeoListening);
  }, [isGeoListening]);

  return { location, isGeoListening, toggleListening, isBusy };
};
