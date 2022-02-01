import React from "react";
import { FormGroup } from "./styled";

const FormGroupView: React.FC = ({ children }) => {
    return (
        <FormGroup>
            {children}
        </FormGroup>
    )
}

export default FormGroupView;