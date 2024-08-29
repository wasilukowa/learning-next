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

import styles from './base.module.scss';
const { wrapper, wrapperCode } = styles;

export const Explanation = ({ typeOfInput }) => {
  const isObject = typeOfInput === 'object';
  if (!isObject) return;
  return (
    <section className={wrapper}>
      <h2>Note: Given object needs to be in JSON format.</h2>
      <ul>
        {explanationBullets.map((bullet, i) => (
          <li key={`li_${i}_${bullet.substring(0, 4).toLowerCase}`}>
            {bullet}
          </li>
        ))}
      </ul>
      <code className={wrapperCode}>
        <pre>{JSON.stringify(json, null, 2)}</pre>
      </code>
    </section>
  );
};
