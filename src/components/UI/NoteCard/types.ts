export interface NoteCardProps {
    id: string;
    colorNote: string;
    titleNote: string;
    observation: string;    
    showModalDeleteThisNote: () => void;
    viewEditNote: () => void;
}

export interface NoteCardContainerProps {
    colorNote: string;
}