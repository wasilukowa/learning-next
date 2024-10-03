'use client';

import { Input } from './Input';
import { Dropdown } from './Dropdown';

import { useSearch } from './useSearch';
import { SearchWithDropdownProps } from './types';

import style from './rwd.module.scss';

const { wrapper, wrapperInput } = style;

export const SearchWithDropdown = ({
  data,
  labels,
}: SearchWithDropdownProps) => {
  const { isBusy, phrase, result, isDropdownVisible, debouncedChangeHandler } =
    useSearch(data);

  return (
    <div className={wrapper}>
      <div className={wrapperInput}>
        <Input handleChange={debouncedChangeHandler} />
      </div>
      {isDropdownVisible && (
        <Dropdown
          isBusy={isBusy}
          foundData={result}
          phrase={phrase}
          labels={labels}
        />
      )}
    </div>
  );
};
