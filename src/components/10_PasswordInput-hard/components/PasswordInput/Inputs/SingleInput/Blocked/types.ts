import { RefCallback } from "react";
import { BlockedProps } from "../../../../../contract/utilityTypes";

export type { BlockedProps };

export type InnerBlockedProps = BlockedProps & {
  nowyPropZClientSide: string;
};
