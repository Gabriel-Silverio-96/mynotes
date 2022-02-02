import Button from "components/Button";
import Input from "components/FormFields/Input";
import FormGeneric from "components/FormGeneric";
import Header from "components/Header";
import Layout from "components/Layout";
import Loading from "components/Loading";
import MessageFormError from "components/MessageFormError";
import React from "react";
import { IProfile } from "./types";

const ProfileView: React.FC<IProfile> = (props) => {
    const { theme, isLoading, errorMessage, saveData, userData, handleChange } = props;
    return (
        <Layout>
            <Header themeTitle={theme.title} isActiveNav={false} />
            <Loading isLoading={isLoading} messageLoading="Loading" />
            
            {!isLoading && (
                <div style={{ marginTop: "-3rem" }}>
                    <FormGeneric
                        title="Profile"
                        widthModal="25rem"
                        isHeaderActive={false}
                        isActiveBack={true}
                    >
                        <MessageFormError
                            message={errorMessage.message_error}
                        />
                        <form method="put" onSubmit={saveData}>
                            <Input
                                label="Full name"
                                typeInput="text"
                                id="full_name"
                                name="full_name"
                                defaultValue={userData.full_name}
                                onChange={handleChange}
                                erroMessage={errorMessage.message_erro_input_full_name}
                            />
                            <Input
                                label="Email"
                                typeInput="email"
                                id="email"
                                name="email"
                                defaultValue={userData.email}
                                disabled={true}
                            />

                            <Button type="submit" title="Save" />
                        </form>
                    </FormGeneric>
                </div>
            )}
        </Layout>
    )
}

export default ProfileView;