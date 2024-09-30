export type FooterCacheProps = {
  callToActionLabel: string;
  closeButtonLabel: string;
};

export type FooterProps = FooterCacheProps & {
  closeModal: () => void;
};

// export type FooterSsrProps = {
//     callToActionLabel: string
//     closeButtonLabel: string;

//     closeModal: () => void,
// }
