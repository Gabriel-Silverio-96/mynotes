import { ContextTheme } from "provider/theme";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import FormContainerView from "./FormContainerView";
import { IFormContainer } from "./types/types.component";

const FormContainer: React.FC<Omit<IFormContainer, "history" | "themeTitle">> = (props) => {
	const history = useHistory();
	const { themeContext } = useContext(ContextTheme);
	const themeTitle = themeContext.title;

	const { 
		title,
		children,
		widthModal = "25rem",
		isLogoVisible = false,
		isActiveButtonBack = true,
		disabledButtonBack = false
	} = props;

	return (
		<FormContainerView
			{... {
				history,
				title,
				themeTitle,
				children,
				widthModal,
				isLogoVisible,
				isActiveButtonBack,
				disabledButtonBack
			}}
		/>
	);
};

export default FormContainer;