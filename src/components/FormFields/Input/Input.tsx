import React from "react";
import { useState } from "react";
import InputView from "./InputView";
import { IInput } from "./type";

const Input: React.FC<Omit<IInput, "isVisiblePassword" | "visiblePassword">> = (props) => {
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

    const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
    const visiblePassword = () => {
        setIsVisiblePassword((prevState: boolean) => !prevState);
    };

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
            isVisiblePassword,
            visiblePassword,
            ...rest
        }} />
    )
}

export default Input;