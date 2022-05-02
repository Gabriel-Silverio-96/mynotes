import Button from "components/Button";
import React from "react";
import { useHistory } from "react-router-dom";
import { Page404Container } from "./styled";

const Page404: React.FC = () => {
	const history = useHistory();
	const back = () => {
		history.goBack();
	};

	return (
		<Page404Container>
			<h1>Error 404</h1>
			<p>The page you are trying to access does not exist</p>
			<Button title="Back" onClick={back} />
		</Page404Container>
	);
};

export default Page404;