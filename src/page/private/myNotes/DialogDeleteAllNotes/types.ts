export interface IDeleteAllNote {
    open: boolean;
    onClose: () => void;
    isLoading: boolean;
    deleteAllNotes?: () => void;
}