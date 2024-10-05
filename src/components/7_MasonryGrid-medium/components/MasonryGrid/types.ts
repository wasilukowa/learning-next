import { MutableRefObject } from 'react';

export type TImageElement = {
  id: string;
  src: string;
  alt: string;
  comment: string;
};

export type TImageElementWithSizeRatio = TImageElement & {
  sizeRatio: number;
};

export type MasonryGridProps = {
  images: TImageElement[];
};

type UseMasonryReturn = {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  imagesDevided: TImageElementWithSizeRatio[][];
  isHelpContainerVisible: boolean;
};

export type TUseMasonryGrid = (images: TImageElement[]) => UseMasonryReturn;
