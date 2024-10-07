import { SubmitButtonProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperButton } = styles;

export const SubmitButton = ({label, submit}: SubmitButtonProps) => {
    return (
        <div className={wrapper}>
            <button className={wrapperButton} onClick={e => submit(e)}>{label}</button>
        </div>
    )
}