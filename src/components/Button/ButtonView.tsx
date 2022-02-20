import Loading from "components/Loading";
import React from "react";
import { Button, IconButton } from "./styled";
import { IButton } from "./types/types.component";

const ButtonView: React.FC<IButton> = (props) => {
    const { title, iconButton, onClick, variant, size, isLoading, messageLoading, justIconLoading, ...rest } = props;
    
    return (
        <Button
            onClick={onClick}
            size={size || "medium"}
            variant={variant || "default"}
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
        </Button>
    )
}

export default ButtonView;