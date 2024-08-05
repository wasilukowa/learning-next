import style from "./rwd.module.scss";
const { wrapper, wrapperLabel, wrapperCoordinate } = style;

export const Coordinates = ({
  latitudeLabel,
  longitudeLabel,
  latitude,
  longitude,
}) => {
  return (
    <div className={wrapper}>
      <p className={wrapperLabel}>{latitudeLabel}</p>
      <span className={wrapperCoordinate}>{latitude}</span>
      <p className={wrapperLabel}>{longitudeLabel}</p>
      <span className={wrapperCoordinate}>{longitude}</span>
    </div>
  );
};
