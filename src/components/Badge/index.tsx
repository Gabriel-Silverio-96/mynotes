import React, { memo } from "react"
import { BadgeContainer } from "./styled";
import { BadgeProps } from "./types";

const Badge: React.FC<BadgeProps> = ({text}) => {
    return (
        <BadgeContainer>
            {text}
        </BadgeContainer>
    )
}

export default memo(Badge);