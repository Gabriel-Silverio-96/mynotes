export interface NoteProps {
    id: number;
    colorNote: string;
    titleNote: string;
    observation: string;
}

export interface NotesListProps {
    note_id: string;
    color_note: string;
    title_note: string;
    observation: string;
    created_at: string;
}