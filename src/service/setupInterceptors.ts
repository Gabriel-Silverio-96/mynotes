import { AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataMessageResponse } from "common/types/ErrorResponse";
import apiMyNotes from "./apiMyNotes";

const SetupInterceptors = (history: any, store: any) => {
    apiMyNotes.interceptors.response.use(response => {
        const { status, data } = response as AxiosResponse<IDataMessageResponse>;
        if (data.type_message || data.message) {
            switch (status) {
                case 200:
                    store.dispatch(snackBar(true, data.message, data.type_message));
                    break

                case 201:
                    store.dispatch(snackBar(true, data.message, data.type_message));
                    break
                default:
                    break;
            }
        }

        return response;
    }, error => {
        const messageError = "An unexpected error has occurred, please try again later";
        if(error.response === undefined) store.dispatch(snackBar(true, messageError, "error")); 
        
        const { status, data } = error.response as AxiosResponse<IDataMessageResponse>;        

        switch (status) {
            case 401:
                store.dispatch(snackBar(true, data.message, data.type_message));
                apiMyNotes.defaults.headers!.Authorization = "";
                localStorage.removeItem("token");
                setTimeout(() => {
                    history.go("/")
                }, 2000);
                break;

            case 403:
                store.dispatch(snackBar(true, data.message, data.type_message));
                break;

            case 404:
                store.dispatch(snackBar(true, data.message, data.type_message));
                break;

            case 500:
                store.dispatch(snackBar(true, data.message, data.type_message));
                break;

            default:
                break;
        }

        return Promise.reject(error);
    });
}

export default SetupInterceptors;