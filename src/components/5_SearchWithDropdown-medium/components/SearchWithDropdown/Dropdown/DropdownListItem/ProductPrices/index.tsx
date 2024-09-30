import { RegularPrice } from "./RegularPrice";
import { SalePrice } from "./SalePrice";

import { ProductPricesProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper } = style;

export const ProductPrices = ({
  regularPrice,
  salePrice,
  currency,
}: ProductPricesProps) => {
  const isOneOfPricesEqualToZero = regularPrice * salePrice === 0;
  if (isOneOfPricesEqualToZero) return;

  const isRegularPriceEqualToSalePrice = regularPrice === salePrice;
  if (isRegularPriceEqualToSalePrice)
    return <SalePrice price={salePrice} currency={currency} />;

  const isSalePriceHigherThanRegular = regularPrice < salePrice;
  if (isSalePriceHigherThanRegular)
    return <SalePrice price={salePrice} currency={currency} />;

  return (
    <div className={wrapper}>
      <RegularPrice price={regularPrice} currency={currency} />
      <SalePrice price={salePrice} currency={currency} />
    </div>
  );
};
