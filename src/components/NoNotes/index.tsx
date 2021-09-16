import React from "react";

import { NoNotesContainer, NoNotesCenter } from "./styled";

const NoNotes: React.FC = () => {
    return (
        <NoNotesCenter>
            <NoNotesContainer>
                <span>😄</span>
                <h1>You didn't create<br/>any notes</h1>
                <p>Create a new note</p>
            </NoNotesContainer>
        </NoNotesCenter>

    );
}

export default NoNotes;
