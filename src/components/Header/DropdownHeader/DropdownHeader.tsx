import { AuthContext } from "provider/authContext";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import apiMyNotes from "service/apiMyNotes";
import DropdownHeaderView from "./DropdownHeaderView";

const DropdownHeader: React.FC = () => {
    const history = useHistory();
    const { setAuthenticated } = useContext(AuthContext);
    const [isActiveDropDown, setIsActiveDropDown] = useState<boolean>(false);

    const toogleDropdown = () => setIsActiveDropDown(prevState => !prevState);

    const logout = () => {
        setAuthenticated(false);
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        apiMyNotes.defaults.headers!.Authorization = "";
        history.push("/");
    }

    return <DropdownHeaderView {... { toogleDropdown, logout, isActiveDropDown }} />
}

export default DropdownHeader;