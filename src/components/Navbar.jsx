import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { getUser } from "../service/authService";

export default function Navbar() {

    const userData = localStorage.getItem("user");
    const user = getUser();
    const role = user?.role;
    return (
        <header className="navbar">

            <div className="navbar-right">


                <div className="profile">

                    <FaUserCircle className="profile-icon" />

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