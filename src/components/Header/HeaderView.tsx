import Button from "components/Button";
import DropdownHeader from "components/Header/DropdownHeader";
import { IHeader } from "components/Header/types";
import Logo from "components/Logo";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./styled";

const HeaderView: React.FC<IHeader> = (props) => {
	const { authenticated, toggleTheme, theme } = props;
	return (
		<HeaderContainer>
			<Link to={authenticated ? "/mynotes" : "/"}>
				<Logo themeTitle={theme.title} responsive />
			</Link>

			<nav>
				{authenticated ? (
					<>
						<Button onClick={toggleTheme} className="switch-theme" iconButton={
							theme.title === "dark"
								? <FiSun size={17.5} />
								: <FiMoon size={17.5} />
						} />
						<DropdownHeader />
					</>
				) : (
					<>
						<Link to="/auth/login">
							<Button
								variant="text"
								title="Login"
							/>
						</Link>
						<Link to="/auth/create-account">
							<Button
								title="Create account"
							/>
						</Link>
						<Button onClick={toggleTheme} iconButton={
							theme.title === "dark"
								? <FiSun size={17.5} />
								: <FiMoon size={17.5} />
						} />
					</>
				)}
			</nav>
		</HeaderContainer>
	);
};

export default HeaderView;