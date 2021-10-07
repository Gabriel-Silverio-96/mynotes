import React, { ChangeEvent, FormEvent, useState } from "react";
import apiMyNotes from "service/apiMyNotes";
import { useHistory } from "react-router";
import { AxiosError } from "axios";

//Components
import Layout from "components/Layout";
import FormGeneric from "components/FormGeneric";
import Input from "components/FormFields/Input";
import { ButtonPrimary } from "components/UI/Button";
import MessageFormError from "components/MessageFormError";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState({
        message_erro_input_email: "",
        message_erro_input_password: "",
        message_erro: ""
    })
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

    const Login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage({
            message_erro_input_email: "",
            message_erro_input_password: "",
            message_erro: ""
        })
        try {
            const request = await apiMyNotes.post("auth/login", loginFields);
            if (request.status === 200) {
                history.push("/mynotes")
            }

        } catch (error) {
            const errorMessge = error as AxiosError;
            const status: number = errorMessge.response!.status;
            const { message_erro_input_email, message_erro_input_password } = errorMessge.response!.data

            setErrorMessage({
                ...errorMessage,
                message_erro_input_email,
                message_erro_input_password,
                message_erro: ""
            })

            if (status === 401) {
                const { message_erro } = errorMessge.response!.data;
                setErrorMessage({
                    message_erro_input_email: "",
                    message_erro_input_password: "",
                    message_erro
                })
            }

            console.error(errorMessge);
        }
    }

    return (
        <Layout>
            <FormGeneric title="Login" widthModal="25rem">
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
                        <Link to="auth/forgot-password">
                            Forgot password?
                        </Link>
                    </div>
                </form>
            </FormGeneric>
        </Layout>
    )
}

export default Login;