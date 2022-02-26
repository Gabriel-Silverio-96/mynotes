import React from "react";
import LogoView from "./LogoView";
import { ILogo } from "./types/types.component";

const Logo: React.FC<ILogo> = ({ themeTitle, responsive }) => {

    return <LogoView {... { themeTitle, responsive }} />
}

export default Logo;