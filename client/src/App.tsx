import React, { ReactElement, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AccountActivationPage, HomePage, LoginPage, SignupPage } from "./Routes";
import AXIOS_INSTANCE from "./services/axios";
import PageLoader from "./UI/PageLoader/PageLoader";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, loadUserFail, loadUserSuccess } from "./redux/reducers/user";
import { RootState } from "./redux/store";
import Header from "./UI/Header/Header";

interface LayoutPropType {
	children: ReactElement<any, any>
}
const Layout: React.FC<LayoutPropType> = ({ children }) => {
	return <>
		<Header />
		{children}
		<div className="h-[1000px]"></div>
	</>
}

const App: React.FC = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const userDetail = useSelector((state: RootState) => state.user);
	console.log("redux store ==>> ", userDetail)
	useEffect(() => {
		dispatch(loadUser())
		const validateCookiesAndGetUser = async () => {
			try {
				const resp = await AXIOS_INSTANCE.get("/api/auth/validate-cookies", {
					withCredentials: true,
				});
				dispatch(loadUserSuccess(resp.data.user));
			} catch (error) {
				dispatch(loadUserFail());
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
				userDetail.isUserLoading === true ? <PageLoader /> :
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/sign-up" element={<SignupPage />} />
						<Route path="/activate-account" element={<AccountActivationPage />} />
						<Route path="/home" element={<Layout><HomePage /></Layout>} />
					</Routes>
			}
		</>
	);
};

export default App;
