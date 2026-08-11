import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../service/userService";
import Pagination from "../components/common/Pagination";
import SortControls from "../components/common/SortControls";

const sortFields = [
    { value: "nom", label: "Nom" },
    { value: "id", label: "ID" }
];

export default function Users() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [orderBy, setOrderBy] = useState("id");
    const [order, setOrder] = useState("asc");

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const res = await getAllUsers(page, size, orderBy, order);

                setUsers(res.data.content);
                setTotalPages(res.data.totalPages);
                setTotalElements(res.data.totalElements);

            } catch (error) {
                console.log(error);
            }
        };

        loadUsers();
    }, [page, size, orderBy, order]);

    const handleOrderByChange = (value) => {
        setOrderBy(value);
        setPage(0);
    };

    const handleOrderChange = (value) => {
        setOrder(value);
        setPage(0);
    };

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="users-page">
            <div className="page-header">
                <h1>Users</h1>
                {user?.role === "ADMIN" && (
                    <button onClick={() => navigate("/dashboard/users/ajouter-user")} className="add-client-btn">
                        + Add User
                    </button>
                )}
            </div>

            <div className="toolbar">
                <SortControls
                    fields={sortFields}
                    orderBy={orderBy}
                    order={order}
                    setOrderBy={handleOrderByChange}
                    setOrder={handleOrderChange}
                />
            </div>

            <table className="users-table">
                <thead>
                    <tr>
                        <th>Last name</th>
                        <th>First name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((u) => (
                        <tr key={u.id}>
                            <td>{u.nom}</td>
                            <td>{u.prenom}</td>
                            <td>{u.email}</td>
                            <td>
                                <span className="role-badge">{u.role}</span>
                            </td>
                            <td>
                                <div className="actions">
                                    <button className="btn-view">View</button>
                                    <button className="btn-edit">Edit</button>
                                    <button className="btn-delete">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination
                page={page}
                totalPages={totalPages}
                setPage={setPage}
                size={size}
                setSize={setSize}
                totalElements={totalElements}
            />
        </div>
    );
}
