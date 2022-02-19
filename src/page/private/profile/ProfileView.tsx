import { IErrorInputMessage } from "common/types/ErrorResponse";
import Button from "components/Button";
import Input from "components/FormFields/Input";
import FormGeneric from "components/FormGeneric";
import React from "react";
import { IProfile } from "./types";

const ProfileView: React.FC<IProfile> = (props) => {
    const { isLoadingData, isLoadingRequestEditing, errorInputMessage, putEditProfile, userData, handleChange } = props;
    return (

        <FormGeneric
            title="Profile"
            widthModal="25rem"
            isHeaderActive={false}
            isActiveBack={true}
        >
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

                <Button type="submit" title="Save" isLoading={isLoadingRequestEditing} messageLoading="Saving" />
            </form>
        </FormGeneric>
    )
}

export default ProfileView;