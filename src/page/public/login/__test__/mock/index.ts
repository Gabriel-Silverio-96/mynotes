import { IDataMessageResponse } from "common/types/errorResponse";
import { ILoginResponse } from "../../type";

const errorsInputMessage = {
	errors: [
		{ value: "", msg: "Email is required", param: "email", location: "body" },
		{ value: "", msg: "Password is required", param: "password", location: "body" }
	]
};

const userNotExist: IDataMessageResponse = {
	type_message: "warning",
	message: "Unregistered user, create an account"
};

const incorrectEmailorPassword: IDataMessageResponse = {
	type_message: "warning",
	message: "Incorrect email or password"
};

const loggedSuccess: ILoginResponse = {
	type_message: "success",
	message: "Successful authentication",
	token: "123456",
	user_data: {
		full_name: "John Foo"
	}
};

export { errorsInputMessage, userNotExist, incorrectEmailorPassword, loggedSuccess };
