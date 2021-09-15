type noteEditDataProps = {
    id: number;
    colorNote: string;
    titleNote: string;
    observation: string;   
}

export interface ModalMainProps {
    onSubmit: () => void;
    onChange: () => void;
    noteEditData: noteEditDataProps
    deleteNote: () => void;
}