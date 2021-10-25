export type UserData = {
    full_name: string;
    email: string;
}

export interface GetUserData {
    data: UserData;
    status: number;
}

export interface InputRequiredProps {
    message_erro_input_required: string;
}
