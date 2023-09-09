import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../styles/styles";

interface PropType {
	name: string;
	autoComplete?: string;
	placeholder?: string;
	required?: boolean;
	error?: boolean;
	errorMsg?: string;
	value: string;
	onChange: (name: string, value: string) => void;
	label: string;
	lableClassName?: string;
	inputClassName?: string;
}

const InputPassword: React.FC<PropType> = (props) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	return (
		<div>
			<label
				htmlFor="password"
				className={`block text-sm font-medium text-secondary-light pl-[2px] ${props.lableClassName}`}>
				{props.label}
			</label>
			<div className="mt-1 relative">
				<input
					type={showPassword ? "text" : "password"}
					name={props.name}
					placeholder={props.placeholder ?? ""}
					autoComplete={props.autoComplete ?? "current-password"}
					required={props.required}
					value={props.value}
					onChange={(e) =>
						props.onChange(e.target.name, e.target.value)
					}
					className={`${
						props.error ? styles.inputError : styles.inputStyle
					} ${props.inputClassName}`}
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
				{props.error && (
					<p className="text-xs text-red-500 pl-[2px]">
						{props.errorMsg}
					</p>
				)}
			</div>
		</div>
	);
};

export default InputPassword;
