import React, { useState } from "react";
import ShopIN from "../../assets/ShopIN";
import styles from "../../styles/styles";
import google from "../../assets/search.png";
import facebook from "../../assets/facebook.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import TermsAndCondition from "../../static/TermsAndCondition";

interface UserInputType {
	displayName: string;
	email: string;
	password: string;
	conformPassword: string;
	avatar: File | null;
}
interface ToggleType {
	pwd: boolean;
	cnfrmPwd: boolean;
}

const Signup: React.FC = () => {
	const [showPassword, setShowPassword] = useState<ToggleType>({
		pwd: false,
		cnfrmPwd: false,
	});
	const [userInput, setUserInput] = useState<UserInputType>({
		displayName: "",
		email: "",
		password: "",
		conformPassword: "",
		avatar: null,
	});
	const handleUserInput = (name: string, value: string) => {
		setUserInput((props) => ({ ...props, [name]: value }));
	};
	const handleCreateAccount = () => {};
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
							Already have an account?{" "}
							<Link
								to="/login"
								className="text-primary underline cursor-pointer hover:text-primary-dark transition duration-300">
								Log in
							</Link>
						</h2>
					</div>
				</div>
				{/* LOGIN FORM */}
				<form className="my-10 flex flex-col sm:gap-6 gap-2">

					{/* PROFILE PICTURE */}
					<div className="flex justify-center mt-4">
						<div className="flex flex-col items-center">
							<div className="inline-block h-20 w-20 rounded-full overflow-hidden ">
								{userInput.avatar ? (
									<img
										src={String(
											URL.createObjectURL(
												userInput.avatar
											)
										)}
										alt="avatar"
										className="h-full w-full object-cover rounded-full"
									/>
								) : (
									<RxAvatar className="h-20 w-20 text-secondary-light opacity-70" />
								)}
							</div>
							<p className="text-sm text-secondary">
								Profile Picture
							</p>
						</div>
					</div>

					{/* DISPLAY NAME INPUT */}
					<div>
						<label
							htmlFor="displayName"
							className="block text-sm font-medium text-neutral-500 pl-[2px]">
							Dispaly Name
						</label>
						<div className="mt-1">
							<input
								type="displayName"
								name="displayName"
								autoComplete="none"
								required
								value={userInput.displayName}
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

					{/* EMAIL INPUT */}
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

					{/* PASSWORD INPUT */}
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
							{showPassword.pwd ? (
								<AiOutlineEyeInvisible
									className="absolute right-2 top-[10px] text-primary"
									onClick={() =>
										setShowPassword((prev) => ({
											...prev,
											pwd: false,
										}))
									}
								/>
							) : (
								<AiOutlineEye
									className="absolute right-2 top-[10px] text-primary"
									onClick={() =>
										setShowPassword((prev) => ({
											...prev,
											pwd: true,
										}))
									}
								/>
							)}
						</div>
					</div>

					{/* COMFORM PASSWORD INPUT */}
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-neutral-500 pl-[2px]">
							Conform Password
						</label>
						<div className="mt-1 relative">
							<input
								type={showPassword ? "text" : "password"}
								name="conformPassword"
								autoComplete="current-password"
								required
								value={userInput.conformPassword}
								onChange={(e) =>
									handleUserInput(
										e.target.name,
										e.target.value
									)
								}
								className={styles.inputStyle}
								onPaste={(e) => e.preventDefault()}
							/>
							{showPassword.cnfrmPwd ? (
								<AiOutlineEyeInvisible
									className="absolute right-2 top-[10px] text-primary"
									onClick={() =>
										setShowPassword((prev) => ({
											...prev,
											cnfrmPwd: false,
										}))
									}
								/>
							) : (
								<AiOutlineEye
									className="absolute right-2 top-[10px] text-primary"
									onClick={() =>
										setShowPassword((prev) => ({
											...prev,
											cnfrmPwd: true,
										}))
									}
								/>
							)}
						</div>
					</div>

					{/* SELECT PROFILE PIC BUTTON */}
					<div>
						{/* <label
							htmlFor="avatar"
							className="block text-sm font-medium text-gray-700"></label> */}
						<div>
							<label
								htmlFor="file-input"
								className="flex items-center justify-center my-2 px-4 py-[6px] border border-primary-dark rounded-md text-sm text-secondary-light hover:bg-white">
								<span>Choose Profile Picture</span>
								<input
									type="file"
									name="avatar"
									id="file-input"
									accept=".jpg,.jpeg,.png"
									onChange={(e) => {
										const selectedFile =
											e.target.files?.[0];
										selectedFile &&
											setUserInput((prev) => ({
												...prev,
												avatar: selectedFile,
											}));
									}}
									className="sr-only"
								/>
							</label>
						</div>
					</div>

					{/* SUBMIT BUTTON */}
					<div>
						<button
							className="w-full py-1 text-white border-0 bg-primary hover:bg-primary-dark transition duration-300 cursor-pointer rounded-md shadow-sm outline-none ring-0 "
							onClick={handleCreateAccount}>
							Creat Account
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
						<TermsAndCondition />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
