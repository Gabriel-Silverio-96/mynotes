import { ContextMyNotesProvider } from "./Context/MyNotes";
import MyNotes from "./MyNotes";

const MyNotesPage = () => {
    return (
        <ContextMyNotesProvider>
            <MyNotes />
        </ContextMyNotesProvider>
    )
}

export default MyNotesPage;