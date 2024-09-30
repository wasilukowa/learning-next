'use client';

import { useModal } from './useModal';
import { Modal } from '../../Shared';

import { ModalUsageExampleProps } from './types';

import style from './rwd.module.scss';
const { wrapper, buttonGlobal } = style;

export const ModalUsageExample = ({
  modalData,
  openModalButtonLabel,
}: ModalUsageExampleProps) => {
  const { isOpen, openModal, closeModal } = useModal({ opened: false });

  return (
    <div className={wrapper}>
      <button className={buttonGlobal} onClick={openModal}>
        {openModalButtonLabel}
      </button>
      <Modal modalData={modalData} isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};
