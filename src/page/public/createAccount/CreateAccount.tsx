import { AxiosError } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import apiMyNotes from "service/apiMyNotes";
import CreateAccountView from "./CreateAccountView";
import { UserData } from "./types";

const CreateAccount: React.FC = () => {
    const dispatch = useDispatch();
    
    const history = useHistory();
    const [alertMessage, setAlertMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState({
        message_erro_input_email: "",
        message_erro_input_password: "",
        message_erro_input_full_name: "",
    })

    const [userData, setUserData] = useState<UserData>({
        full_name: "",
        email: "",
        password: ""
    });

    const createAccount = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage({
            message_erro_input_email: "",
            message_erro_input_password: "",
            message_erro_input_full_name: ""
        })
        setAlertMessage("");
        try {
            const { status } = await apiMyNotes.post("/auth/create-account", userData);

            if (status === 201) {
                history.push("/auth/login");
                dispatch(snackBar(true, "Account created successfully"));                
            }
        } catch (error) {
            const errorLog = error as AxiosError;
            const status = errorLog.response!.status;
            const { message_erro_input_email,
                message_erro_input_password,
                message_erro_input_full_name,
                message_erro } = errorLog.response!.data;

            if (status === 422) {
                setErrorMessage({
                    message_erro_input_email,
                    message_erro_input_password,
                    message_erro_input_full_name,
                })
            }

            if (status === 403) {
                setAlertMessage(message_erro)
            }
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({
            ...userData,
            [name]: value
        })
    }

    return (
        <CreateAccountView
            {...{ alertMessage, createAccount, errorMessage, handleChange }}
        />
    )
}

export default CreateAccount;