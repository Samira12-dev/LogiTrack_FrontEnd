export default function ProductForm() {
    const [product, setProduct] = useState({
        nom: "",
        category: "",
        price: "",
        quantityStock: ""
    });


    useEffect(() => {
        if (id) {
            getProductById(id)
        }
    }, [])
    return (
        <>
            <form className="product-form">
                <h2>Add Product</h2>

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

                <button>Save Product</button>
            </form>
        </>
    )
}