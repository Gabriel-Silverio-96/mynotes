export interface NoteCardProps {
    id: any;
    colorNote: string;
    titleNote: string;
    observation: string;    
    showModalDeleteThisNote: () => void;
    viewEditNote: () => void;
}

export interface NoteCardContainerProps {
    colorNote: string;
}