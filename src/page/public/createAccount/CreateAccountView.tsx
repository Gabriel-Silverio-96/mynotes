import { IErrorInputMessage } from "common/types/ErrorResponse";
import Button from "components/Button";
import Input from "components/FormFields/Input";
import FormGeneric from "components/FormGeneric";
import Layout from "components/Layout";
import React from "react";
import { ICreateAccount } from "./types";

const CreateAccountView: React.FC<ICreateAccount> = (props) => {
    const { createAccount, handleChange, errorInputMessage } = props
    return (
        <Layout themeSwitch={false}>
            <FormGeneric
                title="Create account"
                widthModal="25rem"
                isHeaderActive={true}
                isActiveBack={true}
            >
                <form method="post" onSubmit={createAccount}>
                    <Input
                        label="Full name"
                        typeInput="text"
                        id="full_name"
                        name="full_name"
                        onChange={handleChange}
                        erroMessage={
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
                        erroMessage={
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
                        erroMessage={
                            errorInputMessage.map((errorInputMessage: IErrorInputMessage) => (
                                errorInputMessage.param === "password" ? errorInputMessage.msg : ""
                            ))
                        }
                    />

                    <Button type="submit" title="Create" />
                </form>
            </FormGeneric>
        </Layout>
    )
}

export default CreateAccountView;