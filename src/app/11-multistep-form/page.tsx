import { MultistepForm } from '@/components/11_MultistepForm-hard/components';
import {
  TMultistepLabels,
  TSingleStep,
} from '@/components/11_MultistepForm-hard/components/MultistepForm/types';
import { getMultistepFormData } from '@/data/data';

export type MultistepFormProps = {
  navigationLabels: TMultistepLabels;
  formData: TSingleStep[];
};
const MultistepFormPage = async () => {
  const data = await getMultistepFormData();
  const { navigationLabels, formData } = data;

  return (
    <MultistepForm navigationLabels={navigationLabels} formData={formData} />
  );
};

export default MultistepFormPage;
