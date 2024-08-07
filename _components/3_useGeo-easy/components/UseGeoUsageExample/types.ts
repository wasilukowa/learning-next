export type UseGeoUsageExampleProps = {
  labels: {
    buttonOnLabel: string;
    buttonOffLabel: string;
    loadingLabel: string;
    latitudeLabel: string;
    longitudeLabel: string;
    errorMessage: string;
  };
};

export type TCoordinates = {
  error: string | null;
  latitude: number | null;
  longitude: number | null;
};

export type TUseGeo = () => UseGeoReturn;

export type UseGeoReturn = {
  location: TCoordinates;
  isBusy: boolean;
  isGeoListening: boolean;
  toggleListening: () => void;
};
