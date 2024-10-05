import style from './rwd.module.scss';

const { wrapperName, wrapperNameBold } = style;

import { ProductNameProps } from './types';
import { splitTextByPhrase } from '../../../../../utils';

export const ProductName = ({ productName, phrase }: ProductNameProps) => {
  const splitedProductName = splitTextByPhrase(productName, phrase);

  return (
    <p className={wrapperName}>
      {splitedProductName.map((product) => {
        if (product.isBold) {
          return (
            <span key={product.text} className={wrapperNameBold}>
              {product.text}
            </span>
          );
        }
        return <span key={product.text}>{product.text}</span>;
      })}
    </p>
  );
};
