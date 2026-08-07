import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

import ProductList from "../components/products/ProductList";
import Pagination from "../components/common/Pagination";
import { getAllProducts, deleteProduct, searchByCategory, searchByPrice, getLowStock } from "../service/productService";
export default function Products() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const [category, setCategory] = useState("");

    const [price, setPrice] = useState("");

    const [lowStock, setLowStock] = useState(false);

    const [page, setPage] = useState(0);

    const [size] = useState(5);

    const [totalPages, setTotalPages] = useState(0);



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


    const getProducts = async () => {
        try {
            let res;

            if (category.trim() !== "") {
                res = await searchByCategory(category);
                setProducts(res.data);
                setTotalPages(1);

            } else if (price !== "") {
                res = await searchByPrice(price);
                setProducts(res.data);
                setTotalPages(1);

            } else if (lowStock) {
                res = await getLowStock();
                setProducts(res.data);
                setTotalPages(1);

            } else {
                res = await getAllProducts(page, size);
                setProducts(res.data.content);
                setTotalPages(res.data.totalPages);
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, [page, category, price, lowStock]);


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
                        {products.map((p) => (
                            <ProductList key={p.id} produit={p} onDelete={handleDelete} />
                        ))}
                    </tbody>
                </table>
                {category === "" && price === "" && !lowStock && (
                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        setPage={setPage}
                    />
                )}
            </div>
        </>
    )
}