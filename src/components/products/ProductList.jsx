import { useNavigate } from "react-router-dom"
import { deleteProduct } from "../../service/productService";
export default function ProductList({ produit, onDelete }) {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));
    const role = user?.role; 


        return (
            <>
                <tr>
                    <td>{produit.nom}</td>
                    <td>{produit.category}</td>
                    <td>{produit.price} DH</td>
                    <td>{produit.quantityStock}</td>
                    <td>
                        <div className="actions">
                            <button onClick={(() => navigate(`/dashboard/products/${produit.id}`))} className="btn-view">View</button>

                            {["ADMIN", "MANAGER"].includes(role) && (
                                <button onClick={(() => navigate(`/dashboard/products/edit/${produit.id}`))} className="btn-edit">Edit</button>
                            )}
                            {role === "ADMIN" && (
                                <button onClick={() => onDelete(produit.id)} className="btn-delete">Delete</button>
                            )}
                        </div>
                    </td>
                </tr>
            </>

        )
}