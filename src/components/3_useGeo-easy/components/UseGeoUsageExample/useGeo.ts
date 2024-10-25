import { useState, useEffect, useCallback } from 'react';

import { TCoordinate } from './types';
import { TUseGeo } from './types';

export const useGeo: TUseGeo = () => {
  const [jsEnabled, setJsEnabled] = useState(false);

  useEffect(() => {
    setJsEnabled(true);
  }, []);

  if (!jsEnabled) console.log('NIE MAAAAAAAAA!!!!!');
  // if (!jsEnabled) return;
  // if (!jsEnabled) throw new Error('JS is enabled. Aj do no...');

  // const [error, setError] = useState<string>('');

  const [isGeoListening, setIsGeoListening] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [longitude, setLongitude] = useState<TCoordinate>(null);
  const [latitude, setLatitude] = useState<TCoordinate>(null);
  const [isError, setIsError] = useState<boolean>(false);

  function delay(t: number) {
    return new Promise((resolve) => setTimeout(resolve, t));
  }

  useEffect(() => {
    const isJsDefined = typeof window !== 'undefined';
    if (!isJsDefined) return;

    let watchId: number;

    if (isGeoListening) {
      setIsBusy(true);
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          delay(2000).then(() => {
            const { latitude, longitude } = position.coords;
            setLongitude(longitude);
            setLatitude(latitude);
            setIsBusy(false);
          });
        },
        (error) => {
          setIsError(true);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        },
      );

      // return;
    }

    // Ustawienie lokalizacji na null, gdy przestajesz nasłuchiwać
    // setLongitude(null);
    // setLatitude(null);

    return () => {
      // Czyszczenie obserwatora po wyłączeniu nasłuchiwania
      setIsBusy(false);
      console.log(isBusy);
      setLongitude(null);
      setLatitude(null);
      navigator.geolocation.clearWatch(watchId);
    };
  }, [isGeoListening]);

  const toggleListening = useCallback(() => {
    setIsGeoListening((prevstate) => !prevstate);
    // tutaj sprobowac to usunac i zobaczyc efekt
  }, []);

  // const longitude = location.longitude ? location.longitude : '';
  // const latitude = location.latitude ? location.latitude : '';

  return {
    longitude,
    latitude,
    isGeoListening,
    toggleListening,
    isBusy,
    isError,
  };
};
