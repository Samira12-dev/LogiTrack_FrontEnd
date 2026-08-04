import { NavLink, useNavigate } from "react-router-dom";
import { FaTruckFast, FaChartLine, FaUsers, FaBox, FaClipboardList, FaUser, FaRightFromBracket } from "react-icons/fa6";

export default function Sidebar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };


    return (
        <aside className="sidebar">

            <div className="sidebar-logo">
                <FaTruckFast />
                <h2>LogiTrack</h2>
            </div>


            <nav className="sidebar-menu">

                <NavLink to="/dashboard">
                    <FaChartLine />
                    Dashboard
                </NavLink>


                <NavLink to="/clients">
                    <FaUsers />
                    Clients
                </NavLink>


                <NavLink to="/products">
                    <FaBox />
                    Products
                </NavLink>


                <NavLink to="/orders">
                    <FaClipboardList />
                    Orders
                </NavLink>


                <NavLink to="/users">
                    <FaUsers />
                    Users
                </NavLink>


                <NavLink to="/profile">
                    <FaUser />
                    Profile
                </NavLink>

            </nav>


            <button 
                className="logout-btn"
                onClick={handleLogout}
            >
                <FaRightFromBracket/>
                Logout
            </button>


        </aside>
    );
}