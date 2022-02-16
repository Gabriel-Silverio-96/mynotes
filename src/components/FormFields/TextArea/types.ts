import { TextareaHTMLAttributes } from "react";

export interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    isLoadingData?: boolean;
    errorMessage?: string | string[];
    messageLoading?: string; 
}