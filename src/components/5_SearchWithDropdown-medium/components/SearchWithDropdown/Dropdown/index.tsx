import { DropdownListItem } from "./DropdownListItem";
import { DropdownListInfo } from "./DropdownListInfo";

import style from "./rwd.module.scss";
const { wrapper } = style;

import { DropdownListProps } from "./types";

export const Dropdown = ({
  isBusy,
  foundData,
  phrase,
  labels,
}: DropdownListProps) => {
  const isPhraseLenghtValid = phrase.length > 3;

  if (!isPhraseLenghtValid)
    return <DropdownListInfo label={labels.toShortQuery} />;

  if (isBusy) return <DropdownListInfo label={labels.loading} />;

  const isResultEmpty = foundData.length === 0;
  if (isResultEmpty) return <DropdownListInfo label={labels.noResults} />;

  return (
    <div className={wrapper}>
      {foundData.map((product) => (
        <DropdownListItem {...product} phrase={phrase} key={product.id} />
      ))}
    </div>
  );
};
