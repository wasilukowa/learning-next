export type UseGeoReturn = {
  location: {
    longitude: number;
    latitude: number;
    error: string;
  };

  isBusy: boolean;
  isGeoListening: boolean;
  toggleListening: () => void;
};
