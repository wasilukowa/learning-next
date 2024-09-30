import style from "./rwd.module.scss";

const { wrapperName, wrapperNameBold } = style;

import { ProductNameProps } from "./types";
import { splitTextByPhrase } from "../../../../../utils";

export const ProductName = ({ productName, phrase }: ProductNameProps) => {
  const splitedProductName = splitTextByPhrase(productName, phrase);

  return (
    <p className={wrapperName}>
      {splitedProductName.map((product) => {
        if (product.isBold) {
          return <span className={wrapperNameBold}>{product.text}</span>;
        }
        return <span>{product.text}</span>;
      })}
    </p>
  );
};
