import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import apiMyNotes from "service/apiMyNotes";
import { AuthContext } from "provider/authContext";

//Components
import Layout from "components/Layout";
import FormGeneric from "components/FormGeneric";
import Input from "components/FormFields/Input";
import { ButtonPrimary } from "components/UI/Button";
import MessageFormError from "components/MessageFormError";

const Login: React.FC = () => {
    const { setAuthenticated } = useContext(AuthContext);
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
        try {
            const { status, data } = await apiMyNotes.post("auth/login", loginFields) as any;
            const token = data.token; 
            
            if (status === 200) {
                localStorage.setItem("token", token);
                apiMyNotes.defaults.headers!.Authorization = `Bearer ${token}`
                setAuthenticated(true);
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
        }
    }
    
    return (
        <Layout>
            <FormGeneric title="Login" widthModal="25rem" isHeaderActive={true}>
                <MessageFormError
                    message={errorMessage.message_erro}
                />
                <form method="POST" onSubmit={Login}>

                    <Input
                        typeInput="email"
                        name="email"
                        label="Email"
                        id="email"
                        onChange={handleForm}
                        erroMessage={errorMessage.message_erro_input_email}
                    />
                    <Input
                        typeInput="password"
                        name="password"
                        label="Password"
                        id="password"
                        onChange={handleForm}
                        erroMessage={errorMessage.message_erro_input_password}
                    />

                    <ButtonPrimary
                        title="Send"
                        type="submit"
                    />

                    <div>
                        <Link to="/auth/forgot-password">
                            Forgot password?
                        </Link>
                    </div>
                </form>
            </FormGeneric>
        </Layout>
    )
}

export default Login;