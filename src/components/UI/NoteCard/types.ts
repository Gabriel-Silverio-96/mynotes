export interface NoteCardProps {
    id: string;
    colorNote: string;
    titleNote: string;
    observation: string;    
    showModalDeleteThisNote: () => void;
}

export interface NoteCardContainerProps {
    colorNote: string;
}