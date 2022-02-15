import React from "react";
import TextAreaView from "./TextAreaView";
import { ITextArea } from "./types";

const TextArea: React.FC<ITextArea> = (props) => {
    const { label, id, isLoadingData, disabled, errorMessage, ...rest } = props;

    return <TextAreaView {...{ label, id, isLoadingData, errorMessage, ...rest }} />
}

export default TextArea;