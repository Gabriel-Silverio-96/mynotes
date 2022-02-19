import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse, IErrorInputMessage } from "common/types/ErrorResponse";
import { ISnackBarResponse } from "common/types/SnackBar";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import apiMyNotes from "service/apiMyNotes";
import ProfileView from "./ProfileView";
import { IProfile, IUserData } from "./types";

const Profile: React.FC<IProfile> = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({} as IUserData);
    const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
    const [isLoadingRequestEditing, setIsLoadingRequestEdit] = useState<boolean>(false);
    const [errorInputMessage, setErrorInputMessage] = useState<IErrorInputMessage[]>([]);

    useEffect(() => {
        const getUserData = async () => {
            setIsLoadingData(true);
            try {
                const { data } = await apiMyNotes.get("/auth/account") as AxiosResponse<IUserData>;
                setUserData(data);
            } catch (err) {
                const error = err as AxiosError;
                const { data, status } = error.response as AxiosResponse<IDataErrorResponse>;
                if (status >= 404) dispatch(snackBar(true, data.message, data.type_message));

            } finally {
                setIsLoadingData(false);
            }
        }
        getUserData();
        
    }, [dispatch]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    };

    const putEditProfile = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorInputMessage([]);
        setIsLoadingRequestEdit(true);
        try {
            const { data } = await apiMyNotes.put("auth/account", userData) as AxiosResponse<ISnackBarResponse>;
            dispatch(snackBar(true, data.message, data.type_message));
            history.push("/mynotes");
        } catch (err) {
            const error = err as AxiosError;
            const { data, status } = error.response as AxiosResponse<IDataErrorResponse>;
            if (status === 400) setErrorInputMessage(data.errors);
            setIsLoadingRequestEdit(false);
        } 
    }

    return (
        <ProfileView
            {...{
                errorInputMessage,
                isLoadingData,
                isLoadingRequestEditing,
                userData, 
                handleChange,
                putEditProfile
            }}
        />
    )
}

export default Profile;