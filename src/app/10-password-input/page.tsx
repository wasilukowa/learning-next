import { PasswordInput } from '@/components/10_PasswordInput-hard/components';

const data = {
  password: 'Password',
  buttonLabels: {
    checkIfValidLabel: 'Check',
    showCharactersLabel: 'Show characters',
    cleanInputsLabel: 'Clean inputs',
  },
  statements: {
    validPasswordStatement: 'Password is correct!',
    invalidPasswordStatement: 'Password is invalid, please try again',
  },
};

const PasswordInputPage = async () => {
  return (
    <PasswordInput
      password={data.password}
      buttonLabels={data.buttonLabels}
      statements={data.statements}
    />
  );
};

export default PasswordInputPage;
