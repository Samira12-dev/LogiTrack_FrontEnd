import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { getAllProducts } from "../service/productService";
import ProductList from "../components/products/ProductList";

export default function Products() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const getproducts = async () => {
        try {
            const res = await getAllProducts()
            setProducts(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getproducts();
    }, [])
    return (
        <>
            <div className="products-page">
                <div className="page-header">
                    <h1>Products</h1>
                    <button onClick={() => navigate("/dashboard/products/ajouter-product")} className="add-product-btn">+ Add Product</button>
                </div>

                <table className="products-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((p) => (
                            <ProductList key={p.id} produit={p} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}