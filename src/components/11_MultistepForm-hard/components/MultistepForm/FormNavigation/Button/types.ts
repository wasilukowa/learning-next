import { AvailabeDirectionTypes } from "../../types";

export type ButtonProps = {
    isActive: boolean;
    label: string;
    direction: AvailabeDirectionTypes;
    onClickAction: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, direction: AvailabeDirectionTypes) => void
}
