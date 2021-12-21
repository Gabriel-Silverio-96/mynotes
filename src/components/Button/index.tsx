import React from "react";

import Loading from "components/Loading";

import { ButtonContainer, IconButton } from "./styled";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = (props) => {
    const { title, iconButton, onClick, variant, type, size, isLoading, messageLoading, justIconLoading, ...rest } = props;

    return (
        <ButtonContainer
            type={type}
            onClick={onClick}
            size={size || "medium"}
            variant={variant || "primary"}
            disabled={isLoading}
            {...rest}
        >
            {!isLoading ? (
                iconButton ? (
                    <IconButton>{iconButton}{title}</IconButton>
                ) : (
                    title
                )
            ) : (
                <Loading isLoading={true} justIcon={justIconLoading} messageLoading={messageLoading} size={20} align="center" />
            )}
        </ButtonContainer>
    )
};

export default Button;