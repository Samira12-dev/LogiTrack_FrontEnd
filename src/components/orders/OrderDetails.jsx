export default function OrderDetails() {
    return (
        <>
            <div className="order-details">

                <h2>Order Details</h2>

                <div className="item">
                    <label>Order ID</label>
                    <p>#1001</p>
                </div>

                <div className="item">
                    <label>Client</label>
                    <p>Samira El</p>
                </div>

                <div className="item">
                    <label>Date</label>
                    <p>2026-08-06</p>
                </div>

                <div className="item">
                    <label>Status</label>
                    <p>PENDING</p>
                </div>

                <div className="details-actions">
                    <button className="btn-back">Back</button>
                    <button className="btn-update">Edit</button>
                </div>

            </div>
        </>
    )
}