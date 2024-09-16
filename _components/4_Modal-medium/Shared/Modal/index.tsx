import { ModalProps } from './types';

import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';

import style from './rwd.module.scss';

const { wrapper, wrapperBackground, wrapperModal } = style;

// const dang = '<h1 className="super_title">ody subtitle</h1><p>LOREMLROEMREHRJAHJHFJAHSFJSA</p>'
// <div dangerouslySetInnerHTML={{__html: dang}}/>

export const Modal = ({ modalData, isOpen, closeModal }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={wrapper}>
      <div className={wrapperBackground} onClick={closeModal}></div>
      <div className={wrapperModal}>
        <Header title={modalData.header.title} closeModal={closeModal} />
        <Content {...modalData.content} />
        <Footer {...modalData.footer} closeModal={closeModal} />
      </div>
    </div>
  );
};
