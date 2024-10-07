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

export type TCoordinates = {
  latitude: TCoordinate;
  longitude: TCoordinate;
};

export type TUseGeo = () => UseGeoReturn;

export type UseGeoReturn = Pick<TCoordinates, 'latitude' | 'longitude'> & {
  isBusy: boolean;
  isGeoListening: boolean;
  toggleListening: () => void;
};
