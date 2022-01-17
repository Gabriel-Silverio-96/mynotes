import Button from "components/Button";
import Input from "components/FormFields/Input";
import FormGeneric from "components/FormGeneric";
import Layout from "components/Layout";
import MessageFormError from "components/MessageFormError";
import React from "react";

const CreateAccountView: React.FC<any> = (props) => {
    const {alertMessage, createAccount, handleChange, errorMessage} = props
    return (
        <Layout themeSwitch={false}>
            <FormGeneric
                title="Create account"
                widthModal="25rem"
                isHeaderActive={true}
                isActiveBack={true}
            >
                <MessageFormError
                    message={alertMessage}
                />

                <form method="post" onSubmit={createAccount}>
                    <Input
                        label="Full name"
                        typeInput="text"
                        id="full_name"
                        name="full_name"
                        onChange={handleChange}
                        erroMessage={errorMessage.message_erro_input_full_name}
                    />
                    <Input
                        label="Email"
                        typeInput="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        erroMessage={errorMessage.message_erro_input_email}
                    />
                    <Input
                        label="Password"
                        typeInput="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        erroMessage={errorMessage.message_erro_input_password}
                    />

                    <Button type="submit" title="Create" />
                </form>
            </FormGeneric>
        </Layout>
    )
}

export default CreateAccountView;