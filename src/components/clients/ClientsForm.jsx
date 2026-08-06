export default function ClientsForm() {
    return (
        <form className="client-form">
            <h2>Ajouter un client</h2>

            <label>Nom</label>
            <input type="text" />

            <label>Email</label>
            <input type="email" />

            <label>Téléphone</label>
            <input type="text" />

            <label>Ville</label>
            <input type="text" />

            <button>Enregistrer</button>
        </form>
    );
}