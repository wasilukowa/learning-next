import { getPriceWithCurrency } from "../../../../../../utils";

import style from "./rwd.module.scss";

const { regular } = style;

import { RegularPriceProps } from "./types";

export const RegularPrice = ({ price, currency }: RegularPriceProps) => {
  const isPriceNegative = price < 0;

  if (isPriceNegative) return <span className={regular}>error</span>;

  const priceWithCurrency = getPriceWithCurrency(price, currency);

  return <span className={regular}>{priceWithCurrency}</span>;
};
