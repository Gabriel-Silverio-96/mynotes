import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse, IErrorInputMessage } from "common/types/ErrorResponse";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import apiMyNotes from "service/apiMyNotes";
import CreateAccountView from "./CreateAccountView";
import { ICreateAccount, IUserData } from "./types";

const USER_DATA_INPUTS_INITIAL_STATE: IUserData = { full_name: "", email: "", password: "" };

const CreateAccount: React.FC<ICreateAccount> = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorInputMessage, setErrorInputMessage] = useState<IErrorInputMessage[]>([]);
    const [userData, setUserData] = useState<IUserData>(USER_DATA_INPUTS_INITIAL_STATE);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    }

    const createAccount = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorInputMessage([]);
        setIsLoading(true);
        
        try {
            await apiMyNotes.post("/auth/create-account", userData);
            dispatch(snackBar(true, "Account created successfully"));
            setIsLoading(false);
            return history.push("/auth/login");
        } catch (err) {
            const error = err as AxiosError;
            const { status, data } = error.response as AxiosResponse<IDataErrorResponse>;
                
            if (status === 400) setErrorInputMessage(data.errors);
            if (status === 403 || status === 500) dispatch(snackBar(true, data.message, data.type_message));
            
            return setIsLoading(false);
        }
    }

    return (
        <CreateAccountView
            {...{ createAccount, errorInputMessage, handleChange, isLoading }}
        />
    )
}

export default CreateAccount;