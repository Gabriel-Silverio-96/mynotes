import React from 'react';

import { NoNotesContainer, NoNotesCenter } from "./styled";

const NoNotes: React.FC = () => {
    return (
        <NoNotesCenter>
            <NoNotesContainer>
                <span>😄</span>
                <h1>You don't have <br/> any grade</h1>
                <p>Create a new note</p>
            </NoNotesContainer>
        </NoNotesCenter>

    );
}

export default NoNotes;
