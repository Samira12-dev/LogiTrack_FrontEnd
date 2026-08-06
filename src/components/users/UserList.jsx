export default function UserList(user) {
    return (
        <>
                    <tr>
                        <td>{user.nom}</td>
                        <td>{user.prenom}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                            <div className="actions">
                                <button className="btn-view">Show</button>
                                <button className="btn-edit">Modify</button>
                                <button className="btn-delete">Delete</button>
                            </div>
                        </td>
                    </tr>
        </>
    );
}