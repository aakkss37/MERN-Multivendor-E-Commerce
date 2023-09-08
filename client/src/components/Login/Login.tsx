import React, { useState } from "react";
import ShopIN from "../../assets/ShopIN";
import styles from "../../styles/styles";
import google from "../../assets/search.png"
import facebook from "../../assets/facebook.png"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

interface UserInputType {
	email: string;
	password: string;
}

const Login: React.FC = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [userInput, setUserInput] = useState<UserInputType>({
		email: "",
		password: "",
	});
	const handleUserInput = (name: string, value: string) => {
		setUserInput((props) => ({ ...props, [name]: value }));
	};
	const handleLogin = () => {};
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
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-neutral-500 pl-[2px]">
							Email address
						</label>
						<div className="mt-1">
							<input
								type="email"
								name="email"
								autoComplete="email"
								required
								value={userInput.email}
								onChange={(e) =>
									handleUserInput(
										e.target.name,
										e.target.value
									)
								}
								className={styles.inputStyle}
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-neutral-500 pl-[2px]">
							Password
						</label>
						<div className="mt-1 relative">
							<input
								type={showPassword ? "text" : "password"}
								name="password"
								autoComplete="current-password"
								required
								value={userInput.password}
								onChange={(e) =>
									handleUserInput(
										e.target.name,
										e.target.value
									)
								}
								className={styles.inputStyle}
							/>
							{showPassword ? (
								<AiOutlineEyeInvisible
									className="absolute right-2 top-[10px] text-primary"
									onClick={() => setShowPassword(false)}
								/>
							) : (
								<AiOutlineEye
									className="absolute right-2 top-[10px] text-primary"
									onClick={() => setShowPassword(true)}
								/>
							)}
						</div>
						<div className="flex justify-between items-center my-2">
							<div
								className={
									styles.noramlFlex +
									"border border-red-500 gap-1"
								}>
								<input
									type="checkbox"
									name="remember-me"
									id="remember-me"
									className="text-primary focus:ring-primary border border-primary"
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
					<div>
						<button
							className="w-full py-1 text-white border-0 bg-primary hover:bg-primary-dark transition duration-300 cursor-pointer rounded-md shadow-sm outline-none ring-0 "
							onClick={handleLogin}>
							Login
						</button>
					</div>
					<div className={`${styles.noramlFlex} justify-between`}>
						<div className="w-5/12 h-[1px] bg-neutral-200"></div>
						<div className="text-xs text-secondary-light">
							<p>OR</p>
						</div>
						<div className="w-5/12 h-[1px] bg-neutral-200"></div>
					</div>
					<div
						className={`${styles.noramlFlex} justify-center gap-6`}>
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
