import { MutableRefObject } from "react";
import { TImageElement } from "../components/MasonryGrid/types";

export type ImagesHiddenProps = {
  images: TImageElement[];
  refference: MutableRefObject<null | HTMLDivElement>;
};
