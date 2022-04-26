import { IErrorInputMessage } from "common/types/ErrorResponse";
import Button from "components/Button";
import Input from "components/FormFields/Input";
import FormContainer from "components/FormContainer";
import React from "react";
import { IProfile } from "./types";

const ProfileView: React.FC<IProfile> = (props) => {
    const {
        isLoadingData,
        isLoadingRequestEditing,
        errorInputMessage,
        putEditProfile,
        userData,
        handleChange
    } = props;
    return (
        <FormContainer title="Profile" disabledButtonBack={isLoadingData || isLoadingRequestEditing}>
            <form method="post" onSubmit={putEditProfile}>
                <Input
                    label="Full name"
                    typeInput="text"
                    id="full_name"
                    name="full_name"
                    isLoadingData={isLoadingData}
                    defaultValue={userData.full_name}
                    onChange={handleChange}
                    errorMessage={
                        errorInputMessage!.map((errorInputMessage: IErrorInputMessage) => (
                            errorInputMessage.param === "full_name" ? errorInputMessage.msg : ""
                        ))}
                />
                <Input
                    label="Email"
                    typeInput="email"
                    id="email"
                    name="email"
                    isLoadingData={isLoadingData}
                    defaultValue={userData.email}
                    disabled={true}
                />

                <Button 
                    type="submit" 
                    title="Save" 
                    disabled={isLoadingData} 
                    isLoading={isLoadingRequestEditing} 
                    messageLoading="Saving" 
                    data-cy="button-save"
                />
            </form>
        </FormContainer>
    )
}

export default ProfileView;