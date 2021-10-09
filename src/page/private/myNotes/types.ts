export interface NoteProps {
    id: number;
    colorNote: string;
    titleNote: string;
    observation: string;
}

export interface NotesListProps {
    note_id?: string;
    color_note: string;
    title_note: string;
    observation: string;
    created_at?: string;
}

export interface RequestProps {
    data: {
        list_notes: NotesListProps[] | [];
    }
    status: number;
}

export interface RequestDeleteProps {
    status: number;
    message: string;
    type_message: string;
}