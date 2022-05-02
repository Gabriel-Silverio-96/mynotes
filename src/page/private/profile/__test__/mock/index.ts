import { IDataMessageResponse } from "common/types/errorResponse";
import { IUserData } from "../../types";

const FULL_NAME_MOCK = "Bob Kyley";

const errorsInputMessage = {
	errors: [
		{ value: "", msg: "Add full name", param: "full_name", location: "body" },
	]
};

const userData: IUserData = {
	full_name: "Bob Mock",
	email: "bob@mock.com"
};

const profileEditSuccess: IDataMessageResponse = {
	type_message: "success",
	message: "Profile successfully updated"
};

export { FULL_NAME_MOCK, errorsInputMessage, userData, profileEditSuccess };