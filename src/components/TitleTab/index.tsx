import React, { useEffect } from 'react';
import {TitleTabProps} from "./types";

const TitleTab: React.FC<TitleTabProps> = ({title}) => {
    useEffect(() => {
        document.title = `Mynote | ${title}`
    }, [])    
    return <></>
}

export default TitleTab;

        