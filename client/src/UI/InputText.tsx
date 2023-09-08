import React from "react";
import styles from "../styles/styles";

interface PropType {
	name: string;
	autoComplete?: string;
	placeholder?: string;
	required?: boolean;
	error?: boolean;
	erroeMsg?: string;
	value: string;
	onChange: (name: string, value: string) => void;
	label: string;
	lableClassName?: string;
	inputClassName?: string;
}

/**
 * InputText Component
 *
 * This component renders a text input field with an optional `label` and `error message`.
 * 
 * NOTE: Use a `div` to adjust the size of the input field.
 * 
 * @component
 * @param {Object} props - The component's props.
 * @param {string} props.name - The name attribute for the input field.
 * @param {string} [props.autoComplete] - The autoComplete attribute for the input field (default: "none").
 * @param {boolean} [props.required] - Indicates whether the input field is required (default: false).
 * @param {boolean} [props.error] - Indicates whether an error state is present.
 * @param {string} [props.errorMsg] - The error message to display when an error is present.
 * @param {string} props.value - The value of the input field.
 * @param {Function} props.onChange - A callback function to handle changes to the input value.
 * @param {string} props.label - The label text for the input field.
 * @param {string} [props.labelClassName] - Additional CSS classes for the label element.
 * @param {string} [props.inputClassName] - Additional CSS classes for the input element.
 * @returns {JSX.Element} JSX element representing the InputText component.
 *
 * @example
 * // Example usage of InputText component:
 * <div className="w-40">
 * 	<InputText
 * 	  name="username"
 * 	  placeholder= "Enter Full Name"
 * 	  autoComplete="username"
 * 	  required={true}
 * 	  error={false}
 * 	  errorMsg="Username is required"
 * 	  value={username}
 * 	  onChange={(name, value) => setUsername(value)}
 * 	  label="Username"
 * 	  labelClassName="font-semibold"
 * 	  inputClassName="font-semibold"
 * 	/>
 * </div>
 */
const InputText: React.FC<PropType> = (props) => {
	return (
		<div>
			<label
				htmlFor={props.name}
				className={`block text-sm font-medium text-neutral-500 pl-[2px] ${props.lableClassName}`}>
				{props.label}
			</label>
			<div className="mt-1">
				<input
					type="text"
					name={props.name}
					autoComplete={props.autoComplete ?? "none"}
					required={props.required ?? false}
					value={props.value}
					onChange={(e) =>
						props.onChange(e.target.name, e.target.value)
					}
					className={`${
						props.error ? styles.inputError : styles.inputStyle
					} ${props.inputClassName}`}
				/>
				{props.error && (
					<p className="text-xs text-red-500 pl-[2px]">
						{props.erroeMsg}
					</p>
				)}
			</div>
		</div>
	);
};

export default InputText;
