import React from "react";

import LoadingGif from "assets/images/loading.gif";
import { LoadingContainer } from "./styled";
import { LoadingProps } from "./types";

const Loading: React.FC<LoadingProps> = ({isLoading}) => {
    return (
        <LoadingContainer isLoading={isLoading}>
            <img src={LoadingGif} alt="Loading" />
            <p>Loading</p>
        </LoadingContainer>
    )
}

export default Loading;
