import { ErrorMessage } from "./ErrorMessage";

import { TextInputProps } from "./types";

import styles from "./rwd.module.scss";

const { wrapper, wrapperInput, wrapperInputLabel, wrapperInputField } = styles;

export const TextInput = ({updateAnswers, isErrorVisible, value, singleFormStepReference, index, inputData}: TextInputProps) => {

    const potentialReference = singleFormStepReference;
    if (!potentialReference) return null;

    const potentialReferenceCurrent = potentialReference.current;
    if (!potentialReferenceCurrent) return null;

    return (
        <div className={wrapper}>
            <div className={wrapperInput}>
                <label className={wrapperInputLabel} htmlFor={inputData.name}>{inputData.label}</label>
                <input 
                    className={wrapperInputField} 
                    type={inputData.type} 
                    id={inputData.id} 
                    name={inputData.name} 
                    value={value} 
                    onChange={e => updateAnswers(inputData.id, e.target.value)}
                    ref={(reference) => {
                        const isReferenceDefined = reference !== null;
                        if (!isReferenceDefined) return;
                        potentialReferenceCurrent[index] = reference;
                      }}
            />
            </div>
            <ErrorMessage isErrorVisible={isErrorVisible} message={inputData.validationMessage} />
        </div>
    )
}