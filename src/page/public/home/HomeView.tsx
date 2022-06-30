import Button from "components/Button";
import React from "react";
import { Link } from "react-router-dom";
import { Main } from "./styled";
import { IHome } from "./types";

const HomeView: React.FC<IHome> = () => {
	return (
		<Main>
			<h1>New way<br /> to <span>organize</span></h1>
			<p>Easily and quickly organize your day</p>
			<div>
				<Link to="auth/create-account">
					<Button size="medium"
						title="Get started"
					/>
				</Link>
			</div>
		</Main>
	);
};

export default HomeView;