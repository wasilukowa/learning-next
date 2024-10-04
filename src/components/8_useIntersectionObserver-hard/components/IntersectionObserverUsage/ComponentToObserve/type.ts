import { ReactNode } from "react";
import { TObserveOptions } from "../types";

export type ComponentToObserveProps = {
  observeOptions: TObserveOptions;
  children: ReactNode;
};
