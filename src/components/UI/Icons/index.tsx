import React from 'react';

const IconMoon: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="19.963" height="19.962" viewBox="0 0 19.963 19.962">
            <path d="M21,12.79A9,9,0,1,1,11.21,3,7,7,0,0,0,21,12.79Z" transform="translate(-2.037 -2)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
    );
}

const IconSun: React.FC = () => {
    return (
        <svg id="Group_35" data-name="Group 35" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <circle id="Ellipse_3" data-name="Ellipse 3" cx="5" cy="5" r="5" transform="translate(7 7)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <line id="Line_2" y2="2" transform="translate(12 1)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <line id="Line_3" y2="2" transform="translate(12 21)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <line id="Line_4" x2="1.42" y2="1.42" transform="translate(4.22 4.22)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <line id="Line_5" x2="1.42" y2="1.42" transform="translate(18.36 18.36)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <line id="Line_6" x2="2" transform="translate(1 12)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <line id="Line_7" x2="2" transform="translate(21 12)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <line id="Line_8" y1="1.42" x2="1.42" transform="translate(4.22 18.36)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <line id="Line_9" y1="1.42" x2="1.42" transform="translate(18.36 4.22)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>

    );
}

const IconClose: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="8.578" height="8.578" viewBox="0 0 8.578 8.578">
            <path id="Path_33" d="M120.578,113l-1-1-3.292,3.292L113,112l-1,1,3.292,3.292L112,119.581l1,1,3.292-3.292,3.292,3.292,1-1-3.292-3.292Z" transform="translate(-112 -112)" stroke="#000" strokeWidth="0" />
        </svg>
    );
}


export { IconMoon, IconSun, IconClose };
