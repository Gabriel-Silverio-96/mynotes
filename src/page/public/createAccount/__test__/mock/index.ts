import { IDataMessageResponse } from "common/types/errorResponse";

const errorsInputMessage = {
	errors: [
		{ value: "", msg: "Add full name", param: "full_name", location: "body" },
		{ value: "", msg: "Email is required", param: "email", location: "body" },
		{ value: "", msg: "Password is required and has a minimum of 8 characters", param: "password", location: "body" }
	]
};

const userAlreadyExist: IDataMessageResponse = {
	type_message: "error",
	message: "This email is already registered"
};

const createAccountSuccess: IDataMessageResponse = {
	type_message: "success",
	message: "Account created successfully",
};

export { errorsInputMessage, userAlreadyExist, createAccountSuccess };
