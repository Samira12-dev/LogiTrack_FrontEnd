

import { Navigate } from "react-router-dom";
import { getUser } from "../../service/authService";

export default function RoleGuard({ roles, children }) {
    const user = getUser();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (!roles.includes(user.role)) {
        return <Navigate to="/access-denied" replace />;
    }

    return children;
}

