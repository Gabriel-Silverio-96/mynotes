export interface LoadingProps {
    isLoading?: boolean;
    justIcon?: boolean;
    messageLoading?: string;
    align?: "center" | "right" | "left";
    size?: number;
    className?: string;
}

export interface LoadingContainerProps {
    isLoading?: boolean;
    alignCenter?: boolean;
    sizeLoading?: string;
    align?: "center" | "right" | "left";   
}