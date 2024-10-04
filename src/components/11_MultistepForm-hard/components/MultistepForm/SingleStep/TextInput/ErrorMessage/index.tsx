import { ErrorMessageProps } from "./types";

import styles from "./rwd.module.scss";

const { wrapper, wrapperError } = styles;

export const ErrorMessage = ({message, isErrorVisible}: ErrorMessageProps) => {

    return (
        <div className={wrapper}>
            { isErrorVisible && <p className={wrapperError}>{message}</p> }
        </div>
    )
}