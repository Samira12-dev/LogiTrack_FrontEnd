export default function ProductForm() {
    return (
        <>
            <form className="product-form">
                <h2>Add Product</h2>

                <label>Product Name</label>
                <input type="text" />

                <label>Category</label>
                <input type="text" />

                <label>Price</label>
                <input type="number" />

                <label>Stock Quantity</label>
                <input type="number" />

                <button>Save Product</button>
            </form>
        </>
    )
}