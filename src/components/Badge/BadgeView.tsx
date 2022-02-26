import React from "react";
import { Badge } from "./styled";
import { IBadge } from "./types/types.component";

const BadgeView: React.FC<IBadge> = ({ text, variant }) => {
    return (
        <Badge variant={variant}>
            {text}
        </Badge>
    )
}

export default BadgeView;