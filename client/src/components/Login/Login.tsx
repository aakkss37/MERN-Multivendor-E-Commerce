import React, { useState } from "react";
import ShopIN from "../../assets/ShopIN";
import styles from "../../styles/styles";
import google from "../../assets/search.png";
import facebook from "../../assets/facebook.png";
import { Link } from "react-router-dom";
import InputText from "../../UI/Inputs/InputText";
import { UserInputErrorMsgType, UserInputErrorType } from "./Types";
import InputPassword from "../../UI/Inputs/InputPassword";
import ButtonGeneral from "../../UI/Buttons/ButtonGeneral";

interface UserInputType {
	email: string;
	password: string;
}

const Login: React.FC = () => {
	const [userInput, setUserInput] = useState<UserInputType>({
		email: "",
		password: "",
	});
	const [inputError, setInputError] = useState<UserInputErrorType>({
		email: false,
		password: false,
	});
	const [inputErrorMsg, setInputErrorMsg] = useState<UserInputErrorMsgType>({
		email: "",
		password: "",
	});
	const handleUserInput = (name: string, value: string) => {
		setInputError((prev) => ({
			...prev,
			[name]: false,
		}));
		setInputErrorMsg((prev) => ({
			...prev,
			[name]: false,
		}));
		setUserInput((props) => ({ ...props, [name]: value }));
	};

	const validateForm = () => {
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!emailPattern.test(userInput.email)) {
			setInputErrorMsg((prev) => ({
				...prev,
				email: "Please enter a valid email address.",
			}));
			setInputError((prev) => ({
				...prev,
				email: true,
			}));
			return false;
		}
		// All validation checks passed
		return true;
	};

	const handleLogin = () => {
		const isValid = validateForm();
		if (isValid) {
			// Perform registration logic here
			// This function will only be called if the form is valid
			console.log(userInput);
		}
	};
	return (
		<div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-4 ">
			<div className="mx-auto w-full max-w-sm">
				{/* LOGIN HEAD */}
				<div className="relative">
					<div className="flex justify-center items-center">
						<ShopIN width="175" height="62" />
					</div>
					<div className="absolute top-14 w-full">
						<h2 className="text-center text-sm text-secondary-dark">
							Don't you have an account?{" "}
							<Link
								to="/sign-up"
								className="text-primary underline cursor-pointer hover:text-primary-dark transition duration-300">
								Create Account
							</Link>
						</h2>
					</div>
				</div>
				{/* LOGIN FORM */}
				<form className="my-10 flex flex-col sm:gap-6 gap-2">
					{/* EMAIL INPUT */}
					<div>
						<InputText
							label="Email Address"
							name="email"
							autoComplete="email"
							required={true}
							error={inputError.email}
							errorMsg={inputErrorMsg.email}
							value={userInput.email}
							onChange={(name, value) =>
								handleUserInput(name, value)
							}
						/>
					</div>
					<div>
						{/* PASSWORD INPUT */}
						<div>
							<InputPassword
								name="password"
								label="Password"
								autoComplete="current-password"
								required={true}
								error={inputError.password}
								errorMsg={inputErrorMsg.password}
								value={userInput.password}
								onChange={(name, value) =>
									handleUserInput(name, value)
								}
							/>
						</div>
						<div className="flex justify-between items-center my-2">
							<div className={`${styles.normalFlex} gap-1`}>
								<input
									type="checkbox"
									name="remember-me"
									id="remember-me"
									className="text-primary w-3 h-3 focus:ring-primary border border-primary"
									// checked
								/>
								<label
									htmlFor="remembar-me"
									className="text-sm text-secondary-dark">
									Remember me.
								</label>
							</div>
							<Link
								className="text-sm underline cursor-pointer text-secondary-light hover:text-primary transition duration-300"
								to="/forget-password">
								Forget Password?
							</Link>
						</div>
					</div>
					{/* SUBMIT BUTTON */}
					<div>
						<ButtonGeneral
							onClick={handleLogin}
							text="Login"
							type="solid"
						/>
					</div>
					<div className={`${styles.normalFlex} justify-between`}>
						<div className="w-5/12 h-[1px] bg-neutral-200"></div>
						<div className="text-xs text-secondary-light">
							<p>OR</p>
						</div>
						<div className="w-5/12 h-[1px] bg-neutral-200"></div>
					</div>
					<div
						className={`${styles.normalFlex} justify-center gap-6`}>
						<button>
							<img src={google} alt="google" width={25} />
						</button>
						<button>
							<img src={facebook} alt="facebook" width={25} />
						</button>
					</div>
					<div>
						<p className="text-justify text-xs text-secondary-dark">
							Terms and condition, Lorem ipsum is a placeholder
							text commonly used to demonstrate the visual form of
							a document or a typeface without relying on
							meaningful content
							<Link
								to="https://legal.hubspot.com/privacy-policy"
								className="text-secondary-light mx-1 underline cursor-pointer hover:text-primary transition duration-300">
								View more
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
