import { IErrorInputMessage } from "common/types/ErrorResponse";
import Button from "components/Button";
import Input from "components/FormFields/Input";
import FormContainer from "components/FormContainer";
import React from "react";
import { ICreateAccount } from "./types";

const CreateAccountView: React.FC<ICreateAccount> = (props) => {
    const { createAccount, handleChange, errorInputMessage, isLoading } = props
    return (
        <FormContainer title="Create account">
            <form method="post" onSubmit={createAccount}>
                <Input
                    label="Full name"
                    typeInput="text"
                    id="full_name"
                    name="full_name"
                    onChange={handleChange}
                    errorMessage={
                        errorInputMessage.map((errorInputMessage: IErrorInputMessage) => (
                            errorInputMessage.param === "full_name" ? errorInputMessage.msg : ""
                        ))
                    }
                />
                <Input
                    label="Email"
                    typeInput="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    errorMessage={
                        errorInputMessage.map((errorInputMessage: IErrorInputMessage) => (
                            errorInputMessage.param === "email" ? errorInputMessage.msg : ""
                        ))
                    }
                />
                <Input
                    label="Password"
                    typeInput="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    errorMessage={
                        errorInputMessage.map((errorInputMessage: IErrorInputMessage) => (
                            errorInputMessage.param === "password" ? errorInputMessage.msg : ""
                        ))
                    }
                />

                <Button title="Create" type="submit" isLoading={isLoading} />
            </form>
        </FormContainer>
    )
}

export default CreateAccountView;