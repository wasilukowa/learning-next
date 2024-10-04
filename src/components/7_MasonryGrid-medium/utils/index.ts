const getShortestColumnIndex = (arrayOfHeights) => {
  const smallestVal = Math.min(...arrayOfHeights);
  const result = arrayOfHeights.findIndex((element) => element === smallestVal);
  return result;
};

type TWithSizeRatio = {
  sizeRatio: number;
};

export const splitImagesIntoArrays = <T extends TWithSizeRatio>(
  numberOfColumns: number,
  images: T[],
): T[][] => {
  const isNumberOfArraysIsPositive = numberOfColumns > 0;
  if (!isNumberOfArraysIsPositive) return [];

  const resultArray = Array.from({ length: numberOfColumns }, () => []);
  const heights = Array.from({ length: numberOfColumns }, () => 0);

  images.map((image) => {
    const shortestColumnIndex = getShortestColumnIndex(heights);
    resultArray[shortestColumnIndex].push(image);
    heights[shortestColumnIndex] =
      heights[shortestColumnIndex] + image.sizeRatio;
  });

  return resultArray;
};

export const getWindowWidth = () => {
  const isWindowDefined = typeof window !== "undefined";
  if (!isWindowDefined) return;

  return window.innerWidth;
};

export const getNumberOfColumns = (width: number) => {
  if (width === 0) return;
  if (width < 500) {
    return 1;
  }
  if (width > 500 && width < 1000) {
    return 2;
  }
  if (width >= 1000) {
    return 4;
  }
};
