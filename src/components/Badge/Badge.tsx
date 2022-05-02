import React from "react";
import BadgeView from "./BadgeView";
import { IBadge } from "./types/types.component";

const Badge: React.FC<IBadge> = ({ text, variant = "primary" }) => {
	return <BadgeView {... { text, variant }} />;
};

export default Badge;