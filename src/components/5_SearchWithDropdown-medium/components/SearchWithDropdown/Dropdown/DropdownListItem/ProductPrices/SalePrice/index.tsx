import { getPriceWithCurrency } from "../../../../../../utils";
import { SalePriceProps } from "./types";

import style from "./rwd.module.scss";
const { sale } = style;

export const SalePrice = ({ price, currency }: SalePriceProps) => {
  const isPriceNegative = price < 0;

  if (isPriceNegative) return <span className={sale}>error</span>;

  const priceWithCurrency = getPriceWithCurrency(price, currency);

  return <span className={sale}>{priceWithCurrency}</span>;
};
