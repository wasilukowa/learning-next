import { CoordinatesProps } from './types';

import { Coordinate } from './Coordinate';

import style from './rwd.module.scss';
const { wrapper } = style;

export const Coordinates = ({
  latitudeLabel,
  longitudeLabel,
  latitude,
  longitude,
}: CoordinatesProps) => {
  return (
    <div className={wrapper}>
      <Coordinate coordinate={latitude} label={latitudeLabel} />
      <Coordinate coordinate={longitude} label={longitudeLabel} />
    </div>
  );
};
