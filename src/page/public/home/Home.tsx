import { useHistory } from "react-router-dom";
import HomeView from "./HomeView";

const Home: React.FC = () => {
	const history = useHistory();
	const sessionUser = () => {
		const path = document.location.pathname === "/";
		const token = localStorage.getItem("token");
		if (path && token) {
			history.push("/mynotes");
		}
	};
	sessionUser();

	return <HomeView />;
};

export default Home;