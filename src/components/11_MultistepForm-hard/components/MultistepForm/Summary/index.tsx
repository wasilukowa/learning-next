import { SummaryProps } from "./types";

import styles from "./rwd.module.scss";

const { wrapper, wrapperRow, wrapperRowKey, wrapperRowValue } = styles;

export const Summary = ({answers, inputLabels}: SummaryProps) => {

    return (
        <ul className={wrapper}>
        {Object.keys(answers).map((key) => 
                <li key={`summary_${key}`} className={wrapperRow}><span className={wrapperRowKey}>{inputLabels[key]}:</span> <span className={wrapperRowValue}>{answers[key]}</span></li>)}

        </ul>)
}