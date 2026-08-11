
export default function SortControls({ fields, orderBy, order, setOrderBy, setOrder }) {
    return (
        <div className="sort-controls">

            <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
                {fields.map((field) => (
                    <option key={field.value} value={field.value}>
                        {field.label}
                    </option>
                ))}
            </select>

            <select value={order} onChange={(e) => setOrder(e.target.value)}>
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
            </select>

        </div>
    );
}
