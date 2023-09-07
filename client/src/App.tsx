import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {LoginPage} from "./Routes"

const App: React.FC = () => {
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	)
};

export default App;
