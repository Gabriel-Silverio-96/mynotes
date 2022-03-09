import React, { forwardRef } from "react";
import TextAreaView from "./TextAreaView";
import { ITextArea } from "./types";

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>((props, ref) => {
    const { label, id, isLoadingData, disabled, errorMessage, messageLoading, ...rest } = props;

    return <TextAreaView {...{ label, id, isLoadingData, errorMessage, messageLoading, ref, ...rest }} />
})

export default TextArea;