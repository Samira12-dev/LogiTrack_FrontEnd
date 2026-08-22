
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductList from "../components/products/ProductList";
import Pagination from "../components/common/Pagination";

import {
    getAllProducts,
    deleteProduct,
    searchByCategory,
    searchByPrice,
    getLowStock
} from "../service/productService";

export default function Products() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [lowStock, setLowStock] = useState(false);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);

    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);

    // OrderBy ثابت
    const [orderBy] = useState("id");
    const [order, setOrder] = useState("asc");


    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;

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
                setTotalElements(res.data.length);

            } else if (price !== "") {

                res = await searchByPrice(price);

                setProducts(res.data);
                setTotalPages(1);
                setTotalElements(res.data.length);

            } else if (lowStock) {

                res = await getLowStock();

                setProducts(res.data);
                setTotalPages(1);
                setTotalElements(res.data.length);

            } else {

                res = await getAllProducts(
                    page,
                    size,
                    orderBy,
                    order
                );

                setProducts(res.data.content);
                setTotalPages(res.data.totalPages);
                setTotalElements(res.data.totalElements);
            }

        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getProducts();
    }, [page, category, price, lowStock, size, order]);


    const handleOrderChange = (e) => {
        setOrder(e.target.value);
        setPage(0);
    };


    return (
        <div className="products-page">

            <div className="page-header">

                <h1>Products</h1>

                <div className="filters">

                    {/* Search Category */}
                    <input
                        type="text"
                        placeholder="Search by category"
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                            setPage(0);
                        }}
                    />

                    {/* Max Price */}
                    <input
                        type="number"
                        placeholder="Max price"
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value);
                            setPage(0);
                        }}
                    />

                    {/* Low Stock */}
                    <label>
                        <input
                            type="checkbox"
                            checked={lowStock}
                            onChange={(e) => {
                                setLowStock(e.target.checked);
                                setPage(0);
                            }}
                        />

                        Low Stock
                    </label>

                    {/* ASC / DESC */}
                    <select
                        value={order}
                        onChange={handleOrderChange}
                    >
                        <option value="asc">ASC</option>
                        <option value="desc">DESC</option>
                    </select>

                </div>

                <button
                    onClick={() =>
                        navigate("/dashboard/products/ajouter-product")
                    }
                    className="add-product-btn"
                >
                    + Add Product
                </button>

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
                        <ProductList
                            key={p.id}
                            produit={p}
                            onDelete={handleDelete}
                        />
                    ))}

                </tbody>

            </table>


            <Pagination
                page={page}
                totalPages={totalPages}
                setPage={setPage}
                size={size}
                setSize={setSize}
                totalElements={totalElements}
            />

        </div>
    );
}