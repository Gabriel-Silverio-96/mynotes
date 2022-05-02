import React from "react";
import { NoNotesCreated, NoNotesCreatedContent } from "./styled";

const NoNotesCreatedView = () => {
	return (
		<NoNotesCreated>
			<NoNotesCreatedContent>
				<span>😄</span>
				<h1>You didn't create any notes</h1>
				<p>Create a new note</p>
			</NoNotesCreatedContent>
		</NoNotesCreated>
	);
};

export default NoNotesCreatedView;