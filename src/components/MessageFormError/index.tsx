import React from "react";
import { MessageFormErrorProps } from "./types";

//Assets
import { MessageFormErrorContainer } from "./styled";

const MessageFormError:React.FC<MessageFormErrorProps> = ({message}) => {
    return (
        <MessageFormErrorContainer>
            {message}
        </MessageFormErrorContainer>
    )
}

export default MessageFormError;