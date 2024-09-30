import { TProduct } from '../types';

import currencyBase from '../../../data/currency.json';

export const searchByPhrase = (
  phrase: string,
  products: TProduct[],
): TProduct[] => {
  const searchResult = products.filter((product) =>
    product.name.toLowerCase().includes(phrase.toLowerCase()),
  );

  return searchResult;
};

export const delayedSearch = async (
  phrase: string,
  products: TProduct[],
): Promise<TProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(searchByPhrase(phrase, products)), 2000);
  });
};

export const getPriceWithCurrency = (price: number, currency: string) => {
  const isCurrencyLeftSided =
    currencyBase.leftSided.findIndex((element) => element === currency) !== -1;

  if (isCurrencyLeftSided) {
    return currency + price.toFixed(2);
  }

  const isCurrencyRightSided =
    currencyBase.rightSided.findIndex((el) => el === currency) !== -1;

  if (isCurrencyRightSided) {
    return price.toFixed(2) + ' ' + currency;
  }
};

type TPieceOfText = {
  isBold: boolean;
  text: string;
};

export const splitTextByPhrase = (
  text: string,
  searchString: string,
): TPieceOfText[] => {
  const regex = new RegExp(`(${searchString})`, 'gi');
  const parts = text.split(regex);

  const splited = parts.map((part) => {
    const isSearchedPhrase = part.toLowerCase() === searchString.toLowerCase();
    if (isSearchedPhrase) return { isBold: true, text: part };
    return { isBold: false, text: part };
  });
  return splited;
};
