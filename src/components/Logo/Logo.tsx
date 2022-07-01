import React from "react";
import LogoView from "./LogoView";
import { ILogo } from "./types/types.component";

const Logo: React.FC<ILogo> = ({ themeTitle, responsive, isoType = false }) => {
	return <LogoView {... { themeTitle, responsive, isoType }} />;
};

export default Logo;