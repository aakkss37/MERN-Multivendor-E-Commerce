import axios, { AxiosInstance, AxiosResponse } from "axios";

const AXIOS_INSTANCE: AxiosInstance = axios.create({
	baseURL: "http://localhost:8000",
	timeout: 15000,
});

interface ProcessedResponse {
	isSuccess?: boolean;

	isFailure?: boolean;

	status?: number;

	msg?: unknown;

	code?: unknown;

	data?: unknown;
}

const processResponse = (response: AxiosResponse): ProcessedResponse => {
	if (response?.status >= 200 && response?.status <= 300) {
		return {
			isSuccess: true,

			data: response.data,
		};
	} else {
		return {
			isFailure: true,

			status: response?.status,
		};
	}
};

export class CustomError extends Error {
	response: AxiosResponse;

	constructor(message: string, response: AxiosResponse) {
		super(message);
		this.response = response;
	}
}

AXIOS_INSTANCE.interceptors.response.use(
	(response: AxiosResponse): AxiosResponse<unknown> => {
		const processedResponse = processResponse(response);

		// if (processedResponse.isFailure) {
		// 	// Create a new error and throw it to trigger the catch block.
		// 	const error = new Error("Request failed");
		// 	// error.response = response;
		// 	throw error;
		// }
		if (processedResponse.isFailure) {
			// Throw a custom error with the response.
			throw new CustomError("Request failed", response);
		}

		return { ...response, ...processedResponse };
	},
	(error) => {
		// Handle network errors here.
		// console.error("Network Error:", error);
		throw error; // Re-throw the error to propagate it to the catch block.
	}
);

export default AXIOS_INSTANCE;
