import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AccountActivationPage, HomePage, LoginPage, SignupPage } from "./Routes";
import AXIOS_INSTANCE from "./services/axios";
import PageLoader from "./UI/PageLoader/PageLoader";

const App: React.FC = () => {
	const navigate = useNavigate()
	const[screenLoaderOn, setScreenLoaderOn] = useState<boolean>(true);
	useEffect(() => {
		const validateCookiesAndGetUser = async () => {
			try {
				setScreenLoaderOn(true)
				await AXIOS_INSTANCE.get("/api/auth/validate-cookies",{
					withCredentials: true,
				});
				setScreenLoaderOn(false)
			} catch (error) {
				console.log(error)
				setScreenLoaderOn(false)
				navigate("/login");
			}
		}
		setTimeout(() => {
			void validateCookiesAndGetUser();
		}, 5000)
	}, []);
	return (
		<>
			{
				screenLoaderOn ? <PageLoader /> :
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/sign-up" element={<SignupPage />} />
					<Route path="/activate-account" element={<AccountActivationPage />} />
					<Route path="/home" element={<HomePage />} />
				</Routes>
			}
		</>
	);
};

export default App;
