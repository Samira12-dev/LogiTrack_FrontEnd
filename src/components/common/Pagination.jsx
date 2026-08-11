
export default function Pagination({ page, totalPages, setPage, size, setSize, totalElements }) {

    const handleSizeChange = (e) => {
        setSize(Number(e.target.value));
        setPage(0);
    };

    return (
        <div className="pagination">

            <div className="pagination-controls">

                <button disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button>

                <span>Page {page + 1} / {totalPages}</span>

                <button disabled={page === totalPages - 1} onClick={() => setPage(page + 1)}>Next</button>

            </div>

            

        </div>
    );
}
