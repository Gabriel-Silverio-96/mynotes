export interface LoadingProps {
    isLoading: boolean;
    justIcon?: boolean;
    align?: "center" | "right" | "left";
    size?: number;
}

export interface LoadingContainerProps {
    isLoading: boolean;
    alignCenter?: boolean;
    sizeLoading?: string;
    align?: "center" | "right" | "left";   
}