import Header from "components/Header/index";
import Layout from "components/Layout";
import React from "react";
import DialogCreateNote from "./DialogCreateNote";
import DialogDeleteAllNotes from "./DialogDeleteAllNotes";
import DialogDeleteThisNote from "./DialogDeleteThisNote";
import DialogEditNote from "./DialogEditNote";
import NoteList from "./NoteList";

const MyNotesPageView: React.FC = () => {
    return (
        <Layout>
            <Header isActiveNav={true} />
            <DialogCreateNote />
            <DialogEditNote />
            <DialogDeleteThisNote />
            <DialogDeleteAllNotes />
            <NoteList />           
        </Layout>
    )
}

export default MyNotesPageView;