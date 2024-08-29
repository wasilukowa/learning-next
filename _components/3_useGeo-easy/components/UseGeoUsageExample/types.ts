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
export type TCoordinate = number | null;

export type TUseGeo = () => UseGeoReturn;

export type UseGeoReturn = {
  latitude: TCoordinate;
  longitude: TCoordinate;
  isBusy: boolean;
  isGeoListening: boolean;
  toggleListening: () => void;
};
