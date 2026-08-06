export default function ClientsDetails() {
    return (
        <div className="client-details">

            <h2>Informations Client</h2>

            <div className="item">
                <label>Nom</label>
                <p>Samira</p>
            </div>

            <div className="item">
                <label>Email</label>
                <p>samira@gmail.com</p>
            </div>

            <div className="item">
                <label>Téléphone</label>
                <p>060000000</p>
            </div>

            <div className="item">
                <label>Ville</label>
                <p>Casablanca</p>
            </div>

            <div className="details-actions">
                <button className="btn-back">Retour</button>
                <button className="btn-update">Modifier</button>
            </div>

        </div>
    );
}