export default function ProductList(produit) {
    return (
        <>
            <tr>
                <td>{product.nom}</td>
                <td>{product.category}</td>
                <td>{product.price} DH</td>
                <td>{product.quantityStock}</td>
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