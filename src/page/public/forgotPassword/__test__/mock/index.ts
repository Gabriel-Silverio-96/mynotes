import { IDataMessageResponse } from "common/types/ErrorResponse";

const errorsInputMessage = {
	errors: [
		{ value: "", msg: "Email is required", param: "email", location: "body" },
	]
};

const unregisteredUser: IDataMessageResponse = {
	type_message: "warning",
	message: "Unregistered user, create an account"
};

const sendEmail: IDataMessageResponse = {
	type_message: "success",
	message: "Email send"
};

export { errorsInputMessage, unregisteredUser, sendEmail };