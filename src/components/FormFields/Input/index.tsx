import React from "react";
import { InputProps } from "./type";

//Assets
import { FormGroup } from "components/FormFields/styled";

const Input: React.FC<InputProps> = ({ label, id, name, typeInput, value, defaultValue, erroMessage, onChange }) => {
    return (
        <FormGroup>
            <label htmlFor={id}>{label}</label>
            <input type={typeInput} id={id} name={name} onChange={onChange} value={value} defaultValue={defaultValue} />
            <span>{erroMessage}</span>
        </FormGroup>
    )
}

export default Input;