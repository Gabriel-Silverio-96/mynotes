export interface IUseDialogMynotes {
	openDialogCreateNote: () => void;
	closeDialogCreateNote: () => void;
	openDialogEditNote: (noteId: string) => void;
	closeDialogEditNote: () => void;
	openDialogDeleteThisNote: (noteId: string) => void;
	closeDialogDeleteThisNote: () => void;
	openDialogDeleteAllNotes: () => void;
	closeDialogDeleteAllNotes: () => void;
}
