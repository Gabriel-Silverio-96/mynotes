import React from "react";
import { ButtonProps } from "./types";
import { ButtonContainer } from "./styled";

const Button: React.FC<ButtonProps> = ({ title, iconButton, onClick, variant, type, size, ...rest }) => {
    return (
        <ButtonContainer
            type={type}
            onClick={onClick}
            size={size || "medium"}
            variant={variant || "primary"}            
            {...rest}
        >
            {iconButton}{title}
        </ButtonContainer>
    )
};

export default Button;