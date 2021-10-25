export interface HeaderProps {
    toggleTheme?: () => void,
    themeTitle: string;
    thereAreNotes?: boolean;
    showModalDeleteAllNote?: () => void;
    isActiveNav: boolean;
}