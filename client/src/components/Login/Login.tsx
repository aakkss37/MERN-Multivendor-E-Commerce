import React from "react";
import ShopIN from "../../assets/ShopIN";
import styles from "../../styles/styles";

const Login: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-4 ">
			<div className="mx-auto w-full max-w-md">
				{/* LOGIN HEAD */}
				<div className="relative">
					<div className="flex justify-center items-center">
						<ShopIN width="200" height="75" />
					</div>
					<div className="absolute top-16 left-20">
						<h2 className="text-center text-sm text-secondary-dark">
							Don't you have an account?{" "}
							<span className="text-primary underline cursor-pointer hover:text-primary-dark transition duration-300">
								Create Account
							</span>
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
								// value={email}
								// onChange={(e) => setEmail(e.target.value)}
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
						<div className="mt-1">
							<input
								type="password"
								name="password"
								autoComplete="current-password"
								required
								// value={password}
								// onChange={(e) => setEmail(e.target.value)}
								className={styles.inputStyle}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
