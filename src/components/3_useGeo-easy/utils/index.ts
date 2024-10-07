import { TCoordinates } from '../components/UseGeoUsageExample/types';

export const getLocation = (): Promise<TCoordinates> => {
  const location: Promise<TCoordinates> = new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;

        const location = {
          latitude,
          longitude,
        };

        resolve(location);
      });
    } else {
      reject({
        latitude: null,
        longitude: null,
      });
    }
  });

  return location;
};
