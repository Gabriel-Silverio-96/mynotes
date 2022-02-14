import { InputGroup, InputElement } from "components/FormFields/styled";
import Loading from "components/Loading";
import React from "react";
import { InputProps } from "./type";

const Input: React.FC<InputProps> = (props) => {
    const { label, id, name, typeInput, value, defaultValue, erroMessage, onChange, disabled, isLoadingData } = props;
    return (
        <InputGroup>
            <label htmlFor={id}>{label}</label>
            <InputElement>
                <input type={typeInput} id={id} name={name} onChange={onChange} value={value} defaultValue={defaultValue} disabled={disabled || isLoadingData} />
                <Loading className="loading-input" isLoading={isLoadingData} messageLoading="Loading data" />
            </InputElement>
            <span>{erroMessage}</span>
        </InputGroup>
    )
}

export default Input;