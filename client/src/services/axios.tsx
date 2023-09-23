import axios, { AxiosInstance } from "axios";

const AXIOS_INSTANCE: AxiosInstance = axios.create({
	baseURL: "http://localhost:8000",
	timeout: 15000,
});

export default AXIOS_INSTANCE;
