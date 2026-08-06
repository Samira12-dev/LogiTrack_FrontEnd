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
                <NavLink to="/dashboard" end>Dashboard</NavLink>
                <NavLink to="/dashboard/clients">Clients</NavLink>
                <NavLink to="/dashboard/products">Products</NavLink>
                <NavLink to="/dashboard/orders">Orders</NavLink>
                <NavLink to="/dashboard/users">Users</NavLink>
                <NavLink to="/dashboard/profile">Profile</NavLink>

            </nav>

            <button className="logout-btn"
                onClick={handleLogout}>
                <FaRightFromBracket />
                Logout
            </button>
        </aside>
    );
}