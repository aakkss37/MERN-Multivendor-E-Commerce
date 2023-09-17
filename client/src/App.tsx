import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LoginPage, SignupPage } from "./Routes";

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/sign-up" element={<SignupPage />} />
		</Routes>
	);
};

export default App;
