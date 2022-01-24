import { AxiosError } from "axios";
import { AuthContext } from "provider/authContext";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import apiMyNotes from "service/apiMyNotes";
import LoginView from "./LoginView";

const Login: React.FC = () => {
    const { setAuthenticated, setUserData } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const history = useHistory();
    const [loginFields, setLoginFields] = useState({
        email: "",
        password: ""
    });

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setLoginFields({
            ...loginFields,
            [name]: value
        })
    }
    const [errorMessage, setErrorMessage] = useState({
        message_erro_input_email: "",
        message_erro_input_password: "",
        message_erro: ""
    })

    const Login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrorMessage({
            message_erro_input_email: "",
            message_erro_input_password: "",
            message_erro: ""
        })
        setIsLoading(true);

        try {
            const { status, data } = await apiMyNotes.post("auth/login", loginFields) as any;
            const token = data.token;
            const userData = data.user_data;

            if (status === 200) {
                localStorage.setItem("token", token);
                localStorage.setItem("userData", JSON.stringify(userData));
                apiMyNotes.defaults.headers!.Authorization = `Bearer ${token}`;
                setUserData(userData)
                setAuthenticated(true);
                setIsLoading(false);
                return history.push("/mynotes")
            }

        } catch (error) {
            const errorLog = error as AxiosError;
            const status = errorLog.response!.status;
            const { message_erro_input_email, message_erro_input_password } = errorLog.response!.data

            setErrorMessage({
                ...errorMessage,
                message_erro_input_email,
                message_erro_input_password,
                message_erro: ""
            })

            if (status === 401) {
                const { message_erro } = errorLog.response!.data;
                setErrorMessage({
                    message_erro_input_email: "",
                    message_erro_input_password: "",
                    message_erro
                })
            }
            console.error(errorLog);
            setIsLoading(false);
        }
    }

    return <LoginView {... { isLoading, handleForm, errorMessage, Login }} />
}

export default Login;