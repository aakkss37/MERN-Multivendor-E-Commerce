import React from "react";
import styles from "../../styles/styles";

interface PropType {
	text: string;
	type: "solid" | "transparent";
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	isLoading?: boolean;
}

const ButtonGeneral: React.FC<PropType> = (props) => {
	return (
		<>
		{props.isLoading ?
		<button
			type="button"
			className={
				props.type === "solid"
					? styles.buttonSolid
					: styles.buttonTransparent
			}>
			{/* SPINNER */}
			<div className={`animate-spin inline-block w-4 h-4 border-[3px] 
				border-current border-t-transparent ${props.type === "solid" ? "text-white" : "text-primary"} 
				rounded-full`} role="status" aria-label="loading"></div>
		</button> 
		:
		<button
			type="button"
			className={
				props.type === "solid"
					? styles.buttonSolid
					: styles.buttonTransparent
			}
			onClick={props.onClick}>
			{props.text}
		</button>
		}
		</>
	);
};

export default ButtonGeneral;
