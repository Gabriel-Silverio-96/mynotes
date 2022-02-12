export interface IHeader {
    openDialogCreateNote?: () => void;
    themeTitle?: string;
    thereAreNotes?: boolean;
    openDialogDeleteAllNotes?: () => void;
    isActiveNav: boolean;
}