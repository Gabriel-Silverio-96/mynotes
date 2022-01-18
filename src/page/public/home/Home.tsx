import { useHistory } from "react-router-dom";
import HomeView from "./HomeView";

export default function Home() {
    const history = useHistory();
    const sessionUser = () => {
        const path = document.location.pathname === "/";
        const token = localStorage.getItem("token");
        if (path && token) {
            history.push("/mynotes")
        }
    }
    sessionUser()

    return <HomeView />
}