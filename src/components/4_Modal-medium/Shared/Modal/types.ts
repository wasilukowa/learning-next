import { ContentProps } from '../../Shared/Modal/Content/types';
import { FooterCacheProps } from '../../Shared/Modal/Footer/types';
import { HeaderCacheProps } from '../../Shared/Modal/Header/types';

export type TModalData = {
  header: HeaderCacheProps;
  content: ContentProps;
  footer: FooterCacheProps;
};

export type ModalCacheProps = {
  modalData: TModalData;
};

export type ModalProps = ModalCacheProps & {
  isOpen: boolean;
  closeModal: () => void;
};
