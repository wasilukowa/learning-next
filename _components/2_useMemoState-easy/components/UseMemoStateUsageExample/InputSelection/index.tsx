import { InputSelectionProps } from './type';

import styles from './rwd.module.scss';

const { wrapper, wrapperLegend, wrapperInputs, wrapperInputsLabel } = styles;

export const InputSelection = ({ typeOfInput, handleTypeChange }: InputSelectionProps) => {
  return (
    <fieldset className={wrapper}>
      <legend className={wrapperLegend}>Your input type: </legend>

      <div className={wrapperInputs}>
        <div>
          <input
            type="radio"
            id={'string'}
            name={'string'}
            value={'string'}
            checked={typeOfInput === 'string'}
            onChange={() => handleTypeChange('string')}
          />
          <label className={wrapperInputsLabel} htmlFor="string">
            String
          </label>
        </div>
        <div>
          <input
            type="radio"
            id={'number'}
            name={'number'}
            value={'number'}
            checked={typeOfInput === 'number'}
            onChange={() => handleTypeChange('number')}
          />
          <label className={wrapperInputsLabel} htmlFor="number">
            Number
          </label>
        </div>
        <div>
          <input
            type="radio"
            id={'object'}
            name={'object'}
            value={'object'}
            checked={typeOfInput === 'object'}
            onChange={() => handleTypeChange('object')}
          />
          <label className={wrapperInputsLabel} htmlFor="object">
            Object
          </label>
        </div>
        <div>
          <input
            type="radio"
            id={'array'}
            name={'array'}
            value={'array'}
            checked={typeOfInput === 'array'}
            onChange={() => handleTypeChange('array')}
          />
          <label className={wrapperInputsLabel} htmlFor="array">
            Array
          </label>
        </div>
      </div>
    </fieldset>
  );
};
