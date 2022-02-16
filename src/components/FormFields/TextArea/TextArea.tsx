import React from "react";
import TextAreaView from "./TextAreaView";
import { ITextArea } from "./types";

const TextArea: React.FC<ITextArea> = (props) => {
    const { label, id, isLoadingData, disabled, errorMessage, messageLoading, ...rest } = props;

    return <TextAreaView {...{ label, id, isLoadingData, errorMessage, messageLoading, ...rest }} />
}

export default TextArea;