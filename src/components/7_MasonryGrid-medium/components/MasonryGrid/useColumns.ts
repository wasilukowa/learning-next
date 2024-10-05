'use client';

import { useEffect, useState } from 'react';
import { getNumberOfColumns, getWindowWidth } from '../../utils';

export const useColumns = () => {
  const [jsEnabled, setJsEnabled] = useState(false);
  const [numberOfColumns, setNumberOfColumns] = useState(0);

  const getColumns = () => {
    const widowWidth = getWindowWidth();
    const isWindowWithDefined = widowWidth !== undefined;
    if (!isWindowWithDefined) return;

    const howManyColumns = getNumberOfColumns(widowWidth);

    setNumberOfColumns(howManyColumns);
  };

  useEffect(() => {
    setJsEnabled(true);
  }, []);

  useEffect(() => {
    getColumns();
    window.addEventListener('resize', getColumns);
    return () => window.removeEventListener('resize', getColumns);
  }, [jsEnabled]);

  return {
    numberOfColumns,
  };
};
