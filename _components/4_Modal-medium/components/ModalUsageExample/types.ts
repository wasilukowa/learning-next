import { TModalData } from '../../types';

export type ModalUsageExampleProps = {
  openModalButtonLabel: string;
  modalData: TModalData;
};

export type useMemoProps = {
  opened: boolean;
};

export type useMemoReturn = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};
