import { AxiosError, AxiosResponse } from "axios";
import { IDataErrorResponse, IErrorInputMessage } from "common/types/ErrorResponse";
import { AuthContext } from "provider/authContext";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import apiMyNotes from "service/apiMyNotes";
import LoginView from "./LoginView";
import { ILoginInputs, ILoginResponse } from "./type";

const LOGIN_INPUTS_INITIAL_STATE: ILoginInputs = { email: "", password: "" };

const Login = () => {
    const history = useHistory();
    const { setAuthenticated, setUserData } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorInputMessage, setErrorInputMessage] = useState<IErrorInputMessage[]>([]);
    const [loginInputs, setLoginInputs] = useState<ILoginInputs>(LOGIN_INPUTS_INITIAL_STATE);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginInputs({ ...loginInputs, [name]: value });
    }

    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorInputMessage([]);
        setIsLoading(true);

        try {
            const { data } = await apiMyNotes.post("auth/login", loginInputs) as AxiosResponse<ILoginResponse>;
            const { token, user_data } = data;

            localStorage.setItem("token", token);
            localStorage.setItem("userData", JSON.stringify(user_data));
            apiMyNotes.defaults.headers!.Authorization = `Bearer ${token}`;
            setUserData(user_data);
            setAuthenticated(true);
            return history.push("/mynotes");
        } catch (err) {
            setIsLoading(false);
            const error = err as AxiosError;
            const { status, data } = error.response as AxiosResponse<IDataErrorResponse>;                
            if (status === 400) setErrorInputMessage(data.errors);             
        }
    }

    return <LoginView {... { isLoading, handleChange, errorInputMessage, login }} />
}

export default Login;