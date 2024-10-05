'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { splitImagesIntoArrays } from '../../utils';
import { useColumns } from './useColumns';

import { TImageElementWithSizeRatio, TUseMasonryGrid } from './types';

export const useMasonryGrid: TUseMasonryGrid = (images) => {
  const { numberOfColumns } = useColumns();

  const [isHelpContainerVisible, setHelpContainerVisibility] = useState(true);
  const [areHelpContainerImagesLoaded, setHelpContainerImagesLoaded] =
    useState(false);

  const [imagesWithSizeRatio, setImagesWithSizeRatio] = useState<
    TImageElementWithSizeRatio[]
  >([]);
  const [imagesDevided, setImagesDevided] = useState<
    TImageElementWithSizeRatio[][]
  >([]);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const areAllHelpContainerImagesHeightsAvailable = (
    imagesArr: HTMLImageElement[],
  ) => {
    const areAllHightsDifferFromZero = imagesArr.every((image) => {
      return image.clientHeight !== 0;
    });

    if (areAllHightsDifferFromZero) {
      createImagesArrayWithAspectRatios(imagesArr);
      setHelpContainerImagesLoaded(true);
      return;
    }

    setTimeout(() => {
      areAllHelpContainerImagesHeightsAvailable(imagesArr);
    }, 10);
  };

  const createImagesArrayWithAspectRatios = useCallback(
    (imagesArr: HTMLImageElement[]) => {
      const imagesWithSizeRatio = images.reduce((acc, img, index) => {
        const height = imagesArr[index].clientHeight;

        if (height === 0) return [];

        const width = imagesArr[index].clientWidth;
        const sizeRatio = height / width;

        return acc.concat([
          {
            ...img,
            sizeRatio,
          },
        ]);
      }, [] as TImageElementWithSizeRatio[]);

      setImagesWithSizeRatio(imagesWithSizeRatio);
    },
    [numberOfColumns],
  );

  // isDefined -> variable "is" Type

  useEffect(() => {
    const potentialReference = containerRef.current;
    const isContainerRefDefined = potentialReference !== null;
    if (!isContainerRefDefined) return;

    const imagesArr = Array.from(
      potentialReference.children,
    ) as HTMLImageElement[];
    areAllHelpContainerImagesHeightsAvailable(imagesArr);
  }, [containerRef.current]);

  useEffect(() => {
    if (areHelpContainerImagesLoaded) {
      const isImagesWithSizeRatioSet =
        imagesWithSizeRatio.length === images.length;
      if (isImagesWithSizeRatioSet) setHelpContainerVisibility(false);

      const imagesDevided = splitImagesIntoArrays(
        numberOfColumns,
        imagesWithSizeRatio,
      );
      setImagesDevided(imagesDevided);
    }
  }, [areHelpContainerImagesLoaded, numberOfColumns]);

  return {
    containerRef,
    imagesDevided,
    isHelpContainerVisible,
  };
};
