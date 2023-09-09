export interface UserInputType {
	displayName: string;
	email: string;
	password: string;
	conformPassword: string;
	avatar: File | null;
}
export interface UserInputErrorType {
	displayName: boolean;
	email: boolean;
	password: boolean;
	conformPassword: boolean;
}
export interface UserInputErrorMsgType {
	displayName: string;
	email: string;
	password: string;
	conformPassword: string;
}