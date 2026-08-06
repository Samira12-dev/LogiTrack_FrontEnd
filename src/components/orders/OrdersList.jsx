export default function OrdersList(command) {
    return (
        <>
            <tr>
                <td>{command.id}</td>
            <td>{command.datecommand}</td>
            <td>{command.client.nom}</td>
            <td>{command.commandeStatut}</td>
                <td>
                    <div className="actions">
                        <button className="btn-view">View</button>
                        <button className="btn-edit">Edit</button>
                        <button className="btn-delete">Delete</button>
                    </div>
                </td>
            </tr>
        </>
    )
}