import Loading from "components/Loading";
import React from "react";
import { TextAreaElement, TextAreaGroup } from "./styled";
import { ITextArea } from "./types";

const TextAreaView: React.FC<ITextArea> = (props) => {
    const { label, id, isLoadingData, defaultValue, disabled, errorMessage, ...rest } = props;
    return (
        <TextAreaGroup>
            <label htmlFor={id}>{label}</label>
            <TextAreaElement>
                <textarea {...rest} disabled={disabled || isLoadingData} defaultValue={!isLoadingData ? defaultValue : ""} />
                <Loading className="loading-input" isLoading={isLoadingData} messageLoading="Loading data" />
            </TextAreaElement>
            <span>{errorMessage}</span>
        </TextAreaGroup>
    )
}

export default TextAreaView;