import { createStore, combineReducers } from "redux";

import SnackBar from "./snackBar/snackBar.reducer";

const rootReducer = combineReducers({
    snackBarOption: SnackBar
});

export const store = createStore(rootReducer);