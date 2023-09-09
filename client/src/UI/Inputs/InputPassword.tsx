import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";

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

/**
 * InputPassword Component
 *
 * This component renders a password input field with an optional label, placeholder, and error message.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} props.name - The name attribute for the input field.
 * @param {string} [props.autoComplete] - The autoComplete attribute for the input field (default: "current-password").
 * @param {string} [props.placeholder] - The placeholder text for the input field (default: empty string).
 * @param {boolean} [props.required] - Indicates whether the input field is required.
 * @param {boolean} [props.error] - Indicates whether an error state is present.
 * @param {string} [props.errorMsg] - The error message to display when an error is present.
 * @param {string} props.value - The value of the input field.
 * @param {Function} props.onChange - A callback function to handle changes to the input value.
 * @param {string} props.label - The label text for the input field.
 * @param {string} [props.labelClassName] - Additional CSS classes for the label element.
 * @param {string} [props.inputClassName] - Additional CSS classes for the input element.
 * @returns {JSX.Element} JSX element representing the InputPassword component.
 *
 * @example
 * // Example usage of InputPassword component:
 * <div className="w-40">
 * 	<InputPassword
 * 	  name="password"
 * 	  autoComplete="new-password"
 * 	  placeholder="Enter your password"
 * 	  required={true}
 * 	  error={false}
 * 	  errorMsg="Password is required"
 * 	  value={password}
 * 	  onChange={(name, value) => setPassword(value)}
 * 	  label="Password"
 * 	  labelClassName="custom-label"
 * 	  inputClassName="custom-input"
 * 	/>
 * </div>
 */
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
						className="absolute right-2 top-2 text-primary text-xl"
						onClick={() => setShowPassword(false)}
					/>
				) : (
					<AiOutlineEye
						className="absolute right-2 top-2 text-primary text-xl"
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
