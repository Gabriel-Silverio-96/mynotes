import Badge from "components/Badge";
import Button from "components/Button";
import Logo from "components/Logo";
import React from "react";
import { Link } from "react-router-dom";
import { Main, MainWrapper, CardContainer,CardHeader, Card, CardContent, Quotes, Footer } from "./styled";
import { IHome } from "./types";

const HomeView: React.FC<IHome> = () => {
	return (
		<Main>
			<MainWrapper>
				<h1>New way<br /> to <span>organize</span></h1>
				<p>Easily and quickly organize your day</p>
				<div>
					<Link to="auth/create-account">
						<Button size="medium"
							title="Get started"
						/>
					</Link>
				</div>
			</MainWrapper>
			<CardContainer>
				<Card>
					<CardContent>
						<CardHeader>
							<h2>Notes</h2>
						</CardHeader>
						<p>
							Create notes to never forget your assignment
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						<CardHeader>
							<h2>Text</h2>
							<Badge text="Comming soon" variant="default" />
						</CardHeader>
						<p>
							Organize your text quickly using markdown, create lists, tables, to-do lists and more
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						<CardHeader>
							<h2>Kanban</h2>
							<Badge text="Comming soon" variant="default" />
						</CardHeader>
						<p>
							Control the flow of tasks and activities for
							your team or project
						</p>
					</CardContent>
				</Card>
			</CardContainer>

			<Quotes>
				<h1>For every minute spent organizing, an hour is earned</h1>
			</Quotes>

			<Footer>
				<Logo isoType />
				<div>
					<Link to="/auth/login">
						<Button title="Login" variant="text" />
					</Link>
					<Link to="/auth/create-account">
						<Button title="Create account" variant="secondary" />
					</Link>
				</div>
			</Footer>
		</Main>
	);
};

export default HomeView;