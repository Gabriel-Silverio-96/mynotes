import Button from "components/Button";
import Logo from "components/Logo";
import React from "react";
import {FormContainer, FormContent, Header} from "./styled";
import { IFormContainer } from "./types/types.component";

const FormContainerView: React.FC<IFormContainer> = (props) => {
	const { history, title, themeTitle, children, widthModal, isLogoVisible, isActiveButtonBack, disabledButtonBack } = props;
	return (
		<FormContainer>
			{isLogoVisible && (
				<Header>
					<Logo themeTitle={themeTitle} />
				</Header>
			)}

			<FormContent widthModal={widthModal}>
				<h1>{title}</h1>
				{children}
			</FormContent>

			{isActiveButtonBack && (
				<Button title="Back" variant="text" onClick={() => history.goBack()} disabled={disabledButtonBack} />
			)}
		</FormContainer>
	);
};

export default FormContainerView;