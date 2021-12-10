import React, { memo } from "react";

import LoadingGif from "assets/images/loading.gif";
import { LoadingContainer } from "./styled";
import { LoadingProps } from "./types";

const Loading: React.FC<LoadingProps> = ({isLoading, justIcon, alignCenter}) => {
    return (
        <LoadingContainer isLoading={isLoading} alignCenter={alignCenter}>
            <img src={LoadingGif} alt="Loading" />
            {!justIcon && <p>Loading</p>}
        </LoadingContainer>
    )
}

export default memo(Loading);
