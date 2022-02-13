export interface NoteCardProps {
    id: any;
    colorNote: string;
    titleNote: string;
    observation: string;    
    openDialogDeleteThisNote: () => void;
    editNote: () => void;
}

export interface NoteCardContainerProps {
    colorNote: string;
}