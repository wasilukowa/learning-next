import { PasswordInput } from '@/components/10_PasswordInput-hard/components';
import { getPasswordInoutDataFromAPI } from '@/data/data';

const PasswordInputPage = async () => {
  const data = await getPasswordInoutDataFromAPI();
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
