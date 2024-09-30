'use client';

import { useState } from 'react';
import { UseSearchProps, UseSearchReturn } from './type';

import { delayedSearch } from '../utils';

import { debounce } from 'lodash';

export const useSearch = (searchData: UseSearchProps): UseSearchReturn => {
  const [phrase, setPhrase] = useState('');

  const [isBusy, setIsBusy] = useState(false);

  const [result, setResult] = useState([]);

  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  const handlePhraseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setPhrase(inputValue);
    setIsBusy(true);

    const isDropdownVisible = inputValue.length > 0;
    setDropdownVisibility(isDropdownVisible);

    delayedSearch(inputValue, searchData)
      .then((result) => {
        setResult(result);
      })
      .catch((error) => {
        console.log(error);
        setResult([]);
      })
      .finally(() => {
        setIsBusy(false);
      });
  };

  const debouncedChangeHandler = debounce(handlePhraseChange, 300);

  return { isBusy, phrase, result, isDropdownVisible, debouncedChangeHandler };
};
