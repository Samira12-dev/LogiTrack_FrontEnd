import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../service/productService";

export default function ProductDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({});

    useEffect(() => {

        const getProduct = async () => {
            try {
                const res = await getProductById(id);
                setProduct(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getProduct();

    }, [id]);

    return (
        <div className="product-details">

            <h2>Product Details</h2>

            <div className="item">
                <label>Name</label>
                <p>{product.nom}</p>
            </div>

            <div className="item">
                <label>Category</label>
                <p>{product.category}</p>
            </div>

            <div className="item">
                <label>Price</label>
                <p>{product.price} DH</p>
            </div>

            <div className="item">
                <label>Stock</label>
                <p>{product.quantityStock}</p>
            </div>

            <div className="details-actions">
                <button
                    className="btn-back"
                    onClick={() => navigate("/dashboard/products")}
                >
                    Back
                </button>

                <button
                    className="btn-update"
                    onClick={() => navigate(`/dashboard/products/edit/${id}`)}
                >
                    Edit
                </button>
            </div>

        </div>
    );
}