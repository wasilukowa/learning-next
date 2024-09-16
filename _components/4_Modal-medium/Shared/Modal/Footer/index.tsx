import style from "./rwd.module.scss";
import { FooterProps } from "./types";

const { wrapper, wrapperButton, wrapperButtonClose, wrapperButtonCTA } = style;

export const Footer = ({
  closeButtonLabel,
  closeModal,
  callToActionLabel,
}: FooterProps) => {
  const handleCallToAction = () => {
    if (typeof window !== "undefined") {
      window.alert("OK");
      closeModal();
    }
  };

  return (
    <div className={wrapper}>
      <button
        className={`${wrapperButton} ${wrapperButtonClose}`}
        onClick={closeModal}
      >
        {closeButtonLabel}
      </button>
      <button
        className={`${wrapperButton} ${wrapperButtonCTA}`}
        onClick={handleCallToAction}
      >
        {callToActionLabel}
      </button>
    </div>
  );
};
