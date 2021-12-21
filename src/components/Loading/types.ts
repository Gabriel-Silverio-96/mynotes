export interface LoadingProps {
    isLoading: boolean;
    justIcon?: boolean;
    messageLoading?: string;
    align?: "center" | "right" | "left";
    size?: number;
}

export interface LoadingContainerProps {
    isLoading: boolean;
    alignCenter?: boolean;
    sizeLoading?: string;
    align?: "center" | "right" | "left";   
}