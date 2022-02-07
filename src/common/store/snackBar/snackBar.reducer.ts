import { ISnackBarResult } from "./types";

const INITIAL_STATE = {
    isOpen: false,
    message: "",
    type: "success"
}

// eslint-disable-next-line
export default function (state = INITIAL_STATE, actions: ISnackBarResult) {
    const { payload } = actions;

    switch (actions.type) {
        case "SNACKBAR_OPEN":
            if (payload.type_message === undefined) payload.type_message = "success"            
            return payload

        default:
            return state
    }

}