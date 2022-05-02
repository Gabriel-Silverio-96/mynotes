import { ContextMyNotesProvider } from "./Context/MyNotes";
import MyNotes from "./MyNotes";

const MyNotesPage: React.FC = () => {
	return (
		<ContextMyNotesProvider>
			<MyNotes />
		</ContextMyNotesProvider>
	);
};

export default MyNotesPage;