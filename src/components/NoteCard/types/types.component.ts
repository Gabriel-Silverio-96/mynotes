export interface INoteCard {
    id: any;
    colorNote: string;
    titleNote: string;
    observation: string;    
    openDialogDeleteThisNote: () => void;
    editNote: () => void;
}