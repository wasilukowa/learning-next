import { ProductName } from "./ProductName";
import { ProductPrices } from "./ProductPrices";

import style from "./rwd.module.scss";
const { wrapper } = style;

import { DropdownListItemProps } from "./types";

export const DropdownListItem = ({
  name,
  regularPrice,
  salePrice,
  currency,
  phrase,
}: DropdownListItemProps) => {
  return (
    <div className={wrapper}>
      <ProductName productName={name} phrase={phrase} />
      <ProductPrices
        regularPrice={regularPrice}
        salePrice={salePrice}
        currency={currency}
      />
    </div>
  );
};
