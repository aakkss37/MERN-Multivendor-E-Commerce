import React from "react";
import styles from "../../styles/styles";

interface PropType {
	text: string;
	type: "solid" | "transpatrent";
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonSubmit: React.FC<PropType> = (props) => {
	return (
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
	);
};

export default ButtonSubmit;
