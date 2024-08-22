import { JSONInput } from './JSONInput';

export const Input = ({ reference, typeOfInput }) => {
  const isTypeNumber = typeOfInput === 'number';
  if (isTypeNumber) return <input type="number" ref={reference} />;

  return <JSONInput reference={reference} typeOfInput={typeOfInput} />;
};
