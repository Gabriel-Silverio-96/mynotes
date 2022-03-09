import Loading from "components/Loading";
import React, { forwardRef } from "react";
import { TextAreaElement, TextAreaGroup } from "./styled";
import { ITextArea } from "./types";

const TextAreaView = forwardRef<HTMLTextAreaElement, ITextArea>((props, ref) => {
    const { label, id, isLoadingData, defaultValue, disabled, errorMessage, messageLoading, ...rest } = props;
    return (
        <TextAreaGroup>
            <label htmlFor={id}>{label}</label>
            <TextAreaElement>
                <textarea
                    ref={ref}
                    disabled={disabled || isLoadingData}
                    defaultValue={!isLoadingData ? defaultValue : ""}
                    {...rest}
                />
                <Loading
                    className="loading-input"
                    isLoading={isLoadingData}
                    messageLoading={messageLoading || "Loading data"}
                />
            </TextAreaElement>
            <span>{errorMessage}</span>
        </TextAreaGroup>
    )
})

export default TextAreaView;