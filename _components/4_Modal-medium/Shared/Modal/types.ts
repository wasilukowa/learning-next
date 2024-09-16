import { TModalData } from "../../types";

export type ModalCacheProps = {
  modalData: TModalData;
};

export type ModalProps = ModalCacheProps & {
  isOpen: boolean;
  closeModal: () => void;
};
