export default function ClientList({client}) {
    return (
        <>

               
                    <tr>
                        <td>{client.nom}</td>
                        <td>{client.email}</td>
                        <td>{client.telephone}</td>
                        <td>{client.ville}</td>
                        <td>
                            <div className="actions">
                                <button className="btn-view">Voir</button>
                                <button className="btn-edit">Modifier</button>
                                <button className="btn-delete">Supprimer</button>
                            </div>
                        </td>
                    </tr>
        </>
    )
}