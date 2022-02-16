import React from "react";
import InputView from "./InputView";
import { IInput } from "./type";

const Input: React.FC<IInput> = (props) => {
    const {
        label,
        id,
        name,
        typeInput,
        defaultValue,
        errorMessage,
        onChange,
        disabled,
        isLoadingData,
        messageLoading,
        ...rest
    } = props;

    return (
        <InputView {... {
            label,
            id,
            name,
            typeInput,
            defaultValue,
            errorMessage,
            onChange,
            disabled,
            isLoadingData,
            messageLoading,
            ...rest
        }} />
    )
}

export default Input;