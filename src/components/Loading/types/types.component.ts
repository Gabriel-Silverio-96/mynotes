import { HTMLAttributes } from "react";

export interface ILoading extends HTMLAttributes<HTMLDivElement>{
    isLoading?: boolean;
    justIcon?: boolean;
    messageLoading?: string;
    align?: "center" | "right" | "left";
    size?: number;
}
