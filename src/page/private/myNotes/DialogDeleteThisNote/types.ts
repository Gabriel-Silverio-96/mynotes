export interface IDialogDeleteThisNote {
    open: boolean;
    onClose: () => void;
    deleteThisNote?: () => void;
}