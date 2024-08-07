import { TCoordinates } from '../components/UseGeoUsageExample/types';

export const getLocation = (): Promise<TCoordinates> => {
  const location: Promise<TCoordinates> = new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        const location = {
          latitude,
          longitude,
          error: '',
        };

        resolve(location);
      });
    } else {
      reject({
        latitude: undefined,
        longitude: undefined,
        error: 'Geolocation failed.',
      });
    }
  });

  return location;
};
