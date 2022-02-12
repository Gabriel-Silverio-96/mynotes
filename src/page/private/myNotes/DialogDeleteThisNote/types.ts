export interface IDialogDeleteThisNote {
    open: boolean;
    onClose: () => void;
    deleteThisNote?: (idNote: string) => void;
}