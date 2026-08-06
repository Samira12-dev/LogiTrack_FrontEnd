export default function ProductDetails() {
    return (
        <>
            <div className="product-details">
                <h2>Product Details</h2>

                <div className="item">
                    <label>Name</label>
                    <p>Gaming Laptop</p>
                </div>

                <div className="item">
                    <label>Category</label>
                    <p>Electronics</p>
                </div>

                <div className="item">
                    <label>Price</label>
                    <p>$1200</p>
                </div>

                <div className="item">
                    <label>Stock</label>
                    <p>15</p>
                </div>

                <div className="details-actions">
                    <button className="btn-back">Back</button>
                    <button className="btn-update">Edit</button>
                </div>
            </div>
        </>
    )
}