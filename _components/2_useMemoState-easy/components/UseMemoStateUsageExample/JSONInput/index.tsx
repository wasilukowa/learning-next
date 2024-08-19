import { Explanation } from './Explanation';

import styles from './rwd.module.scss';
const { wrapper, wrapperTextarea, wrapperExplanation, wrapperTextareaButton } =
  styles;

export const JSONInput = ({ reference }) => {
  const handleTest = () => {
    const givenValue = reference.current.value;

    try {
      const parsedObject = JSON.parse(givenValue);
      console.log(parsedObject);
    } catch (e) {
      console.error('Błędny format JSON: ', e.message);
    }
  };

  return (
    <div className={wrapper}>
      <div className={wrapperTextarea}>
        <textarea rows={10} ref={reference} />
        <button
          onClick={handleTest}
          className={`${wrapperTextareaButton} button-default`}
        >
          test it
        </button>
      </div>
      <div className={wrapperExplanation}>
        <Explanation />
      </div>
    </div>
  );
};
