import React from "react";

interface PropType {
	label: string;
	name: string;
	id: string;
	accept: string;
	onChange: (file: File) => void
}

/**
 * ButtonUpload Component
 *
 * This component renders a file upload button with an optional label, allowing users to select a file.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} props.label - The label text for the file upload button.
 * @param {string} props.name - The name attribute for the input field.
 * @param {string} props.id - The id attribute for the input field.
 * @param {string} props.accept - The file types accepted by the input field (e.g., ".jpg,.jpeg,.png").
 * @param {Function} props.onChange - A callback function to handle the selected file.
 * @returns {JSX.Element} JSX element representing the ButtonUpload component.
 *
 * @example
 * // Example usage of ButtonUpload component:
 * <div clssName="w-40">
 * 	<ButtonUpload
 * 	  label="Upload Profile Picture"
 * 	  name="avatar"
 * 	  id="file-input"
 * 	  accept=".jpg,.jpeg,.png"
 * 	  onChange={(file) => handleFileUpload(file)}
 * 	/>
 * </div>
 */
const ButtonUpload: React.FC<PropType> = (props) => {
	return (
		<label
			// htmlFor={props.id}
			className="flex items-center justify-center my-2 px-4 py-[6px] border border-primary-dark rounded-md text-sm text-secondary-light hover:bg-white">
			<span>{props.label}</span>
			<input
				type="file"
				name="avatar"
				id={props.id}
				accept={props.accept}
				onChange={(e) => {
					const selectedFile = e.target.files?.[0];
					selectedFile &&
						props.onChange(selectedFile);
				}}
				className="sr-only"
			/>
		</label>
	);
};

export default ButtonUpload;
