import { Summary } from "../Summary";
import { TextInput } from "./TextInput";

import { SingleStepProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle } = styles;

export const SingleStep = ({isVisible, answers, updateAnswers, errorsVisibility, singleStepReference, singleStepData, inputLabels}: SingleStepProps) => {

    if (!isVisible) return <Summary answers = {answers} inputLabels = {inputLabels}/>;

    return (
            <div className={wrapper}>
                <div>
                    <h2 className={wrapperTitle}>{singleStepData.title}</h2>
                    {
                        singleStepData.questions.map(
                            (input, index) =>   <TextInput 
                                                    updateAnswers = { updateAnswers }
                                                    value = {answers[input.id] ?? ''}
                                                    singleFormStepReference = {singleStepReference}
                                                    index = {index}
                                                    key={`text_input_${input.id}`} 
                                                    inputData={input}
                                                    isErrorVisible= {errorsVisibility[input.id] ?? false} 
                                                />)
                    }   
                </div>
            </div>
    )
}