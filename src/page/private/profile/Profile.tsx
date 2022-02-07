import dark from "assets/styles/themes/dark";
import { AxiosError } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import apiMyNotes from "service/apiMyNotes";
import useThemeStorage from "util/useThemeStorage";
import Profile2View from "./ProfileView";
import { ErrorMessage, GetUserData, IProfile, UserData } from "./types";

const Profile: React.FC<IProfile> = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [theme] = useThemeStorage("theme", dark);
    const [userData, setUserData] = useState({} as UserData);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
        message_erro_input_full_name: "",
        message_error: "",
    })

    useEffect(() => {
        const getUserData = async () => {
            setIsLoading(true);
            try {
                const { data, status } = await apiMyNotes.get("/auth/account") as GetUserData;
                if (status === 200) {
                    setUserData(data);
                }
            } catch (error) {
                const errorMessage = error as AxiosError;
                const status = errorMessage.response!.status;

                if (status === 401) {
                    localStorage.removeItem("token");
                    apiMyNotes.defaults.headers!.Authorization = "";
                    history.push("/");
                }

                if (status === 500) {
                    history.push("/");
                }
            }
            return setIsLoading(false);
        }
        getUserData()
    }, [history])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const saveData = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage({
            message_erro_input_full_name: "",
            message_error: "",
        })
        try {
            const { status } = await apiMyNotes.put("auth/account", userData);
            if (status === 200) {
                history.push("/mynotes")

                dispatch(snackBar(true, "Profile edited"));
            }
        } catch (error) {
            const errorMessage = error as AxiosError;
            const { message_erro_input_full_name, message_erro } = errorMessage.response!.data as any;
            const status = errorMessage.response!.status;

            if (status === 422) {
                setErrorMessage({
                    message_erro_input_full_name,
                    message_error: "",
                })
            }

            if (status === 403) {
                setErrorMessage({
                    message_erro_input_full_name: "",
                    message_error: message_erro
                })
            }
        }
    }

    return <Profile2View {... {theme, isLoading, errorMessage, saveData, userData, handleChange}} />
}

export default Profile;