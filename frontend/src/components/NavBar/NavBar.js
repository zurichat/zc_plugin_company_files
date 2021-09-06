import "./navBar.css";
import SearchBar from "./SearchBar/SearchBar";
import AddNewFiles from "./AddNewFiles/AddNewFiles";
import SettingsGear from "./SettingsGear/SettingsGear";
import Profile from "./Profile/Profile";

function NavBar() {
    return (
        <div className="nav-bar__container">
            <AddNewFiles />
            <SearchBar />
            <SettingsGear />
            <Profile/>
        </div>
    )
}

export default NavBar;