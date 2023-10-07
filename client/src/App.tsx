import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AccountActivationPage, LoginPage, SignupPage } from "./Routes";
import AXIOS_INSTANCE from "./services/axios";

const App: React.FC = () => {
	useEffect(() => {
		const validateCookiesAndGetUser = async () => {
			try {
				await AXIOS_INSTANCE.get("/api/auth/validate-cookies",{
					withCredentials: true,
				});
			} catch (error) {
				console.log(error)
			}
		}
		void validateCookiesAndGetUser();
	}, []);
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/sign-up" element={<SignupPage />} />
			<Route path="/activate-account" element={<AccountActivationPage />} />
		</Routes>
	);
};

export default App;
