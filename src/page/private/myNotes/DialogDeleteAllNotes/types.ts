export interface IDeleteAllNote {
    open: boolean;
    onClose: () => void;
    deleteAllNotes?: () => void;
}