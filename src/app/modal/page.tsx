import { ModalUsageExample } from '../../components/4_Modal-medium/components';

const data = {
  name: 'Modal',
  id: 'modal',
  url: '/modal',
  data: {
    openModalButtonLabel: 'show modal',
    modalData: {
      header: {
        title: 'Modal super title',
      },
      content: {
        title: 'Content title',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consectetur omnis sunt delectus odio a ullam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consectetur omnis sunt delectus odio a ullam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consectetur omnis sunt delectus odio a ullam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consectetur omnis sunt delectus odio a ullam!',
      },
      footer: {
        closeButtonLabel: 'Close',
        callToActionLabel: 'Sign me up!',
      },
    },
  },
};

const ModalPage = async () => {
  return (
    <ModalUsageExample
      openModalButtonLabel={data.data.openModalButtonLabel}
      modalData={data.data.modalData}
    />
  );
};

export default ModalPage;
