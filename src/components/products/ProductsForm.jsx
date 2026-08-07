import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct ,updateProduct, getProductById } from "../../service/productService";
export default function ProductForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        nom: "",
        category: "",
        price: "",
        quantityStock: ""
    });


    useEffect(() => {

        const getProduct = async () => {

            if (!id) return;

            try {
                const res = await getProductById(id);
                setProduct(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getProduct();
    }, [id]);

    const handlSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await updateProduct(id, product);
            } else {
                await addProduct(product)
            }
            navigate("/dashboard/products")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <form className="product-form" onSubmit={handlSubmit}>
                <h2>{id ? "Edit Product" : "Add Product"}</h2>

                <label>Product Name</label>
                <input type="text" value={product.nom} onChange={(e) =>
                    setProduct({ ...product, nom: e.target.value })
                } />

                <label>Category</label>
                <input type="text" value={product.category} onChange={((e) =>
                    setProduct({ ...product, category: e.target.value }))}
                />

                <label>Price</label>
                <input type="number" value={product.price} onChange={((e) =>
                    setProduct({ ...product, price: e.target.value }))}
                />

                <label>Stock Quantity</label>
                <input type="number" value={product.quantityStock} onChange={((e) =>
                    setProduct({ ...product, quantityStock: e.target.value }))} />

                <button type="submit">
                    {id ? "Update Product" : "Save Product"}
                </button>
            </form>
        </>
    )
}