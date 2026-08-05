import { Link } from "react-router-dom";

export default function AccessDenied() {
    return (
        <div className="error-page">
            <div className="error-card">
                <div className="error-icon">
                    🚫
                </div>

                <h1>Access Denied</h1>

                <p>
                    You don't have permission to access this page.
                    Please contact your administrator if you think this is a mistake.
                </p>

                <Link to="/dashboard" className="error-btn">
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
}