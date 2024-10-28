import { PasswordInput } from '@/components/10_PasswordInput-hard/components';
import { getPasswordInputDataFromAPI } from '@/data/data';

const PasswordInputPage = async () => {
  const data = await getPasswordInputDataFromAPI();
  const { password, buttonLabels, statements } = data;

  return (
    <PasswordInput
      password={password}
      buttonLabels={buttonLabels}
      statements={statements}
    />
  );
};

export default PasswordInputPage;
