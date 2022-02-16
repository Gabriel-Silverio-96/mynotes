import { InputGroup, InputElement } from "components/FormFields/styled";
import Loading from "components/Loading";
import React from "react";
import { IInput } from "./type";

const InputView: React.FC<IInput> = (props) => {
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
        <InputGroup>
            <label htmlFor={id}>{label}</label>
            <InputElement>
                <input
                    type={typeInput}
                    id={id}
                    name={name}
                    onChange={onChange}
                    defaultValue={!isLoadingData ? defaultValue : ""}
                    disabled={disabled || isLoadingData}
                    {...rest}
                />
                <Loading className="loading-input" isLoading={isLoadingData} 
                    messageLoading={messageLoading || "Loading data"} 
                />
            </InputElement>
            <span>{errorMessage}</span>
        </InputGroup>
    )
}

export default InputView;