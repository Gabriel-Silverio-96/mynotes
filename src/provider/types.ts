export interface ContextGlobalProps {
    modalState: boolean;
    setModalState: (b: boolean) => void;

    modalDeleteThisNote: boolean;
    setModalDeleteThisNote: (b: boolean) => void;

    modalDeleteAllNote: boolean;
    setModalDeleteAllNote: (b: boolean) => void;
}