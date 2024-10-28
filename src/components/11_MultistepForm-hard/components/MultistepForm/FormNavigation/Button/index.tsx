import styles from './rwd.module.scss';

const { buttonActive, buttonDisabled } = styles;

import { ButtonProps } from './types';

export const Button = ({
  onClickAction,
  label,
  isActive,
  direction,
}: ButtonProps) => {
  return (
    <>
      {isActive ? (
        <button
          className={buttonActive}
          onClick={(e) => onClickAction(e, direction)}
        >
          {label}
        </button>
      ) : (
        <button className={buttonDisabled} disabled>
          {label}
        </button>
      )}
    </>
  );
};
