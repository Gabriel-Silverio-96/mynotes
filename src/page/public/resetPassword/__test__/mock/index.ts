import { IDataMessageResponse } from "common/types/ErrorResponse";

const errorsInputMessage = {
	errors: [
		{ value: "", msg: "Password is required and has a minimum of 8 characters", param: "password", location: "body" },
	]
};

const invalidToken: IDataMessageResponse = {
	type_message: "error",
	message: "Invalid token"
};

const resetPasswordSuccess: IDataMessageResponse = {
	type_message: "success",
	message: "Password updated"
};

export { errorsInputMessage, invalidToken, resetPasswordSuccess };
