import { useState } from 'react';

export const RadioButton = ({ typeOfT, setTypeOfT }) => {
  // const [typeOfT, setSelectedVal] = useState<
  //   'string' | 'number' | 'object' | 'array'
  // >('string');

  return (
    <fieldset>
      <legend>Check if it is working on type: </legend>

      <div>
        <input
          type="radio"
          id={'string'}
          name={'string'}
          value={'string'}
          checked={typeOfT === 'string'}
          onChange={() => setTypeOfT('string')}
        />
        <label htmlFor="string">String</label>
      </div>

      <div>
        <input
          type="radio"
          id={'number'}
          name={'number'}
          value={'number'}
          checked={typeOfT === 'number'}
          onChange={() => setTypeOfT('number')}
        />
        <label htmlFor="dewey">Number</label>
      </div>

      <div>
        <input
          type="radio"
          id={'object'}
          name={'object'}
          value={'object'}
          checked={typeOfT === 'object'}
          onChange={() => setTypeOfT('object')}
        />
        <label htmlFor="object">Object</label>
      </div>

      {/* <div> */}
      <input
        type="radio"
        id={'array'}
        name={'array'}
        value={'array'}
        checked={typeOfT === 'array'}
        onChange={() => setTypeOfT('array')}
      />
      <label htmlFor="array">Array</label>
      {/* </div> */}
    </fieldset>
  );
};
