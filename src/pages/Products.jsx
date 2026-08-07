import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { getAllProducts } from "../service/productService";
import { deleteProduct } from "../service/productService";
import ProductList from "../components/products/ProductList";

export default function Products() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const [category, setCategory] = useState("");

    const [price, setPrice] = useState("");

    const [lowStock, setLowStock] = useState(false);

    const filterProducts = products.filter((p) =>
    (
        p.category.toLowerCase().includes(category.toLowerCase()) &&
        (price === "" || p.price <= Number(price)) &&
        (!lowStock || p.quantityStock < 10)
    )
    );


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
    

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);

            setProducts((prevProducts) =>
                prevProducts.filter((p) => p.id !== id)
            );

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="products-page">
                <div className="page-header">
                    <h1>Products</h1>

                    <div className="filters">

                        <input
                            type="text"
                            placeholder="Search by category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />

                        <input
                            type="number"
                            placeholder="Max price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />

                        <label>
                            <input
                                type="checkbox"
                                checked={lowStock}
                                onChange={(e) => setLowStock(e.target.checked)}
                            />
                            Low Stock
                        </label>

                    </div>
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
                        {filterProducts.map((p) => (
                            <ProductList key={p.id} produit={p} onDelete={handleDelete} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}