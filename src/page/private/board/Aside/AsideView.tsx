import Badge from "components/Badge";
import Button from "components/Button";
import React from "react";
import { FiSettings } from "react-icons/fi";
import { GoNote } from "react-icons/go";
import { MdOutlineNotes, MdOutlineSpaceDashboard } from "react-icons/md";
import { Aside, AsideFooter, Nav, NavItens } from "./styled";

const AsideView: React.FC = () => {
	return (
		<Aside>
			<Button title="New board" variant="primary" />
			<Nav>
				<NavItens>
					<h4>BOARDS</h4>
					<ul>
						<li onClick={() => console.log("NOtes")}>
							<Button title="Notes" iconButton={<GoNote />} variant="text" />
						</li>
						<li className="item-coming-soon" onClick={() => console.log("Text")}>
							<Button title="Text" iconButton={<MdOutlineNotes />} variant="text" />
							<Badge text="Coming soon" variant="default" />
						</li>
						<li className="item-coming-soon" onClick={() => console.log("Kanb")}>
							<Button title="Kanban" iconButton={<MdOutlineSpaceDashboard />} variant="text" />
							<Badge text="Coming soon" variant="default" />
						</li>
					</ul>
				</NavItens>
				<AsideFooter>
					<Button title="Settings" iconButton={<FiSettings />} variant="text" />
				</AsideFooter>
			</Nav>
		</Aside>
	);
};

export default AsideView;