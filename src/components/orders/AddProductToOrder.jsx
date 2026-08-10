import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllProducts } from "../../service/productService";
import { addProductToOrder } from "../../service/orderService";

export default function AddProductToOrder() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [productId, setProductId] = useState("");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const res = await getAllProducts(0, 10);
            setProducts(res.data.content);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!productId) return;

        try {
            await addProductToOrder(
                Number(id),
                Number(productId),
                Number(quantity)
            );
            navigate(`/dashboard/orders/${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>

            <label>Product</label>

            <select value={productId} onChange={(e) => setProductId(e.target.value)}>
                <option value="">Select Product</option>

                {products.map((product) => (
                    <option key={product.id} value={product.id}>
                        {product.nom}
                    </option>
                ))}

            </select>

            <label>Quantity</label>

            <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />

            <button type="submit">Add Product</button>

            <button
                type="button"
                onClick={() => navigate(`/dashboard/orders/${id}`)}
            >
                Cancel
            </button>

        </form>
    );
}