export default function OrdersForm() {
    return (
        <>
            <form className="order-form">

                <h2>Add Order</h2>

                <label>Client</label>
                <select>
                    <option>Select Client</option>
                </select>

                <label>Order Date</label>
                <input type="date" />

                <label>Status</label>
                <select>
                    <option>PENDING</option>
                    <option>PROCESSING</option>
                    <option>SHIPPED</option>
                    <option>DELIVERED</option>
                    <option>CANCELLED</option>
                </select>

                <button>Save Order</button>

            </form>
        </>
    )
}