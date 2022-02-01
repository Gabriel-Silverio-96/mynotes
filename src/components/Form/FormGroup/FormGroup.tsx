import React from "react";
import FormGroupView from "./FormGroupView";

const FormGroup: React.FC = ({children}) => {
    return <FormGroupView {... {children}} />
}

export default FormGroup;