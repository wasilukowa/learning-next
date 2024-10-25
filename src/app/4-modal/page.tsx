import { getModalDataFromAPI } from '@/data/data';
import { ModalUsageExample } from '../../components/4_Modal-medium/components';

const ModalPage = async () => {
  const data = await getModalDataFromAPI();

  return (
    <ModalUsageExample
      openModalButtonLabel={data.openModalButtonLabel}
      modalData={data.modalData}
    />
  );
};

export default ModalPage;
