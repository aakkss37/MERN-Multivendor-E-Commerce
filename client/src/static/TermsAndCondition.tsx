import React from "react";
import { Link } from "react-router-dom";

/**
 *  Use inside a `div` tag in order to chnage the width.
 */
const TermsAndCondition: React.FC = () => {
	return (
		<p className="text-justify text-xs text-secondary-dark">
			Terms and condition, Lorem ipsum is a placeholder text commonly used
			to demonstrate the visual form of a document or a typeface without
			relying on meaningful content
			<Link
				to="https://legal.hubspot.com/privacy-policy"
				className="text-secondary-light mx-1 underline cursor-pointer hover:text-primary transition duration-300">
				View more
			</Link>
		</p>
	);
};

export default TermsAndCondition;
