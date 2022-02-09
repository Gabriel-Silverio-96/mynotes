import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse, IErrorInputMessage } from "common/types/ErrorResponse";
import { AuthContext } from "provider/authContext";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import apiMyNotes from "service/apiMyNotes";
import LoginView from "./LoginView";
import { ILoginResponse, ILoginInputs } from "./type";

const LOGIN_FIELDS_INITIAL_STATE = { email: "", password: "" };

const Login: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { setAuthenticated, setUserData } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorInputMessage, setErrorInputMessage] = useState<IErrorInputMessage[]>([])
    const [loginInputs, setLoginInputs] = useState<ILoginInputs>(LOGIN_FIELDS_INITIAL_STATE);

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setLoginInputs({
            ...loginInputs,
            [name]: value
        })
    }

    const Login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorInputMessage([]);
        setIsLoading(true);

        try {
            const { data } = await apiMyNotes.post("auth/login", loginInputs) as AxiosResponse<ILoginResponse>;
            const { token, user_data } = data;

            localStorage.setItem("token", token);
            localStorage.setItem("userData", JSON.stringify(user_data));
            apiMyNotes.defaults.headers!.Authorization = `Bearer ${token}`;
            setUserData(user_data)
            setAuthenticated(true);
            setIsLoading(false);
            return history.push("/mynotes");
        } catch (err) {
            const error = err as AxiosError;
            const { status, data } = error.response as AxiosResponse<IDataErrorResponse>;

            if (status === 400) {
                setErrorInputMessage(data.errors);
            };

            if (status === 403 || status === 500) {
                dispatch(snackBar(true, data.message, data.type_message));
            };

            return setIsLoading(false);
        }
    }

    return <LoginView {... { isLoading, handleForm, errorInputMessage, Login }} />
}

export default Login;