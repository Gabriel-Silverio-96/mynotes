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

const IconEye: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="13.8" height="10.309" viewBox="0 0 13.8 10.309">
            <g transform="translate(-2.578 -5.011)">
                <path d="M1,8.655S3.327,4,7.4,4s6.4,4.655,6.4,4.655-2.327,4.655-6.4,4.655S1,8.655,1,8.655Z" transform="translate(2.078 1.511)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                <circle cx="2" cy="2" r="2" transform="translate(7.478 8.166)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
            </g>
        </svg>
    )
}

const IconTrash: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10.73" height="11.177" viewBox="0 0 10.73 11.177">
            <path d="M131.241,113.006h-.112a.112.112,0,0,0,.112-.112v.112h4.247v-.112a.112.112,0,0,0,.112.112h-.112v1.006h1.006v-1.118A.9.9,0,0,0,135.6,112H131.13a.9.9,0,0,0-.894.894v1.118h1.006Zm7.042,1.006h-9.836a.447.447,0,0,0-.447.447v.447a.112.112,0,0,0,.112.112h.844l.345,7.307a.9.9,0,0,0,.893.852h6.343a.893.893,0,0,0,.893-.852l.345-7.307h.844a.112.112,0,0,0,.112-.112v-.447A.447.447,0,0,0,138.283,114.012Zm-1.854,8.159H130.3l-.338-7.153h6.8Z" transform="translate(-128 -112)" fill="red" />
        </svg>

    )
}


export { IconMoon, IconSun, IconClose, IconEye, IconTrash };
