import React, { memo } from "react";
import ButtonView from "./ButtonView";
import { IButton } from "./types/types.component";

const Button: React.FC<IButton> = (props) => {
	const { title, iconButton, onClick, variant, size, isLoading, messageLoading, justIconLoading, ...rest } = props;

	return (
		<ButtonView
			{... {
				title,
				iconButton,
				onClick,
				variant,
				size,
				isLoading,
				messageLoading,
				justIconLoading,
				...rest
			}}
		/>
	);
};

export default memo(Button);