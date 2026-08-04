import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Navbar() {

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <header className="navbar">

            <div className="search-box">
                <FaSearch />
                <input 
                    type="text"
                    placeholder="Search..."
                />
            </div>

            <div className="navbar-right">

                <div className="notification">
                    <FaBell />
                    <span></span>
                </div>

                <div className="profile">

                    <FaUserCircle className="profile-icon"/>

                    <div className="profile-info">
                        <strong>
                            {user?.nom || "User"}
                        </strong>

                        <small>
                            {user?.role || "ROLE"}
                        </small>
                    </div>

                </div>

            </div>


        </header>
    );
}