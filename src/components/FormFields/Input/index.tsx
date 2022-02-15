import { InputGroup, InputElement } from "components/FormFields/styled";
import Loading from "components/Loading";
import React from "react";
import { IInput } from "./type";

const Input: React.FC<IInput> = (props) => {
    const {
        label,
        id,
        name,
        typeInput,
        defaultValue,
        erroMessage,
        onChange,
        disabled,
        isLoadingData
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
                    defaultValue={defaultValue}
                    disabled={disabled || isLoadingData}
                />
                <Loading className="loading-input" isLoading={isLoadingData} messageLoading="Loading data" />
            </InputElement>
            <span>{erroMessage}</span>
        </InputGroup>
    )
}

export default Input;