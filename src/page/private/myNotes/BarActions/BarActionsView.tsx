import Button from "components/Button";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { Actions, BarActions } from "./styled";
import { IBarAction } from "./types";

const BarActionsView: React.FC<IBarAction> = (props) => {
    const { openDialogDeleteAllNotes, noNotesCreated, openDialogCreateNote } = props;
    return (
        <BarActions>
            <h2>Board</h2>
            <Actions>
                <Button
                    title="New"
                    variant="primary"
                    onClick={openDialogCreateNote}
                />
                <Button
                    onClick={openDialogDeleteAllNotes}
                    disabled={noNotesCreated}
                    variant="danger"
                    iconButton={<FiTrash2 size={17.5} />}
                    data-testid="button-delete-all-notes"
                />
            </Actions>
        </BarActions>
    )
}

export default BarActionsView;