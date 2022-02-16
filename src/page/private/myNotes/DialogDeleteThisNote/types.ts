export interface IDialogDeleteThisNote {
    open: boolean;
    isLoading: boolean;
    deleteThisNote?: () => void;
    onClose: () => void;
}