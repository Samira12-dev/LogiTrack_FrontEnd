export default function SearchBar({ placeholder = "Rechercher un client...", value, onChange, onSearch }) {
    return (
        <div className="search-bar">

            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />

            <button onClick={onSearch}>Rechercher</button>

        </div>
    );
}
