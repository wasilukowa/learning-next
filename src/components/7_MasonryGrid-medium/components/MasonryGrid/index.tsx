'use client';
import { ImagesHidden } from '../../ImagesHidden';
import { Column } from './Column';

import { useMasonryGrid } from './useMasonryGrid';

import { MasonryGridProps } from './types';

import style from './rwd.module.scss';
const { wrapper } = style;

export const MasonryGrid = ({ images }: MasonryGridProps) => {
  const { containerRef, imagesDevided, isHelpContainerVisible } =
    useMasonryGrid(images);

  return (
    <>
      {isHelpContainerVisible && (
        <ImagesHidden images={images} refference={containerRef} />
      )}

      <div className={wrapper}>
        {imagesDevided.map((imagesArray, index) => (
          <Column key={`column_${index}`} images={imagesArray} />
        ))}
      </div>
    </>
  );
};
