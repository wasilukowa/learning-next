const explanationBullets = [
  'JSON objects are written within {curly} braces.',

  'Each item is a key-value pair.',

  'The keys and string type values are written within double quotes. Other data types—like integer and boolean—don’t need to be written in quotes.',

  'Each item is separated from the next one using a comma (,). There is no comma after the last item.',

  'Arrays inside JSON strings are written within [square] brackets.',

  'Objects and arrays can be embedded within an object',
];

const json = {
  continentName: 'North America',
  area: 24.71,
  countries: [
    {
      countryName: 'Mexico',
      countryCode: '+52',
      location: 'south of north america',
      languagesSpoken: ['spanish', 'maya', 'nahuatl'],
    },
  ],
};

const explanationBulletsArray = [
  'JSON arrays are written within [square] brackets.',

  'Each item in an array is separated by a comma (,). There is no comma after the last item.',

  'Items in an array can be of any data type, including strings, numbers, booleans, objects, and other arrays.',

  'Strings and keys within arrays are written within double quotes. Other data types—like integer and boolean—don’t need to be written in quotes.',

  'Arrays can be nested within arrays or objects.',

  'Arrays in JSON are used to represent ordered lists of values.',
];

const jsonArray = [
  'apple', // String
  42, // Number
  true, // Boolean
  {
    name: 'John Doe', // Object with key-value pairs
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
    },
  },
  [
    'red', // Nested array
    'green',
    'blue',
  ],
  null, // Null value
];

import { TtypeOfInput } from '../types';
import styles from './base.module.scss';
const { wrapper, wrapperBullet, wrapperCode } = styles;

type ExplanationProps = { typeOfInput: TtypeOfInput };

export const Explanation = ({ typeOfInput }: ExplanationProps) => {
  const isObject = typeOfInput === 'object' || typeOfInput === 'array';
  if (!isObject) return;

  let explanation = [];
  let example = null;
  if (typeOfInput === 'object') {
    explanation = explanationBullets;
    example = json;
  } else {
    explanation = explanationBulletsArray;
    example = jsonArray;
  }
  return (
    <section className={wrapper}>
      <h2>{`Note: Given ${typeOfInput} needs to be in JSON format.`}</h2>
      <ul>
        {explanation.map((bullet, i) => (
          <li
            key={`li_${i}_${bullet.substring(0, 4).toLowerCase}`}
            className={wrapperBullet}
          >
            {bullet}
          </li>
        ))}
      </ul>
      <code className={wrapperCode}>
        <pre>{JSON.stringify(example, null, 2)}</pre>
      </code>
    </section>
  );
};
