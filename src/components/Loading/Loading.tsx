import React from "react";
import LoadingView from "./LoadingView";
import { ILoading } from "./types/types.component";

const Loading: React.FC<ILoading> = (props) => {
    const { isLoading, justIcon, align, messageLoading, size = 25, ...rest } = props;
    return <LoadingView {... { isLoading, justIcon, align, messageLoading, size, ...rest }} />
}

export default Loading;