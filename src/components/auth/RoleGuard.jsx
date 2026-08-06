import { Navigate } from "react-router-dom";

function RoleGuard({ roles, children }) {

  // Njibo l'utilisateur men localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Ila makaynch utilisateur -> ymchi l login
  if (user === null) {
    return <Navigate to="/login" />;
  }

  // Ila role dyalo machi mn les rôles li masmou7 lihom
  if (roles.includes(user.role) === false) {
    return <Navigate to="/access-denied" />;
  }

  // Ila kolchi mzyan -> yban contenu
  return children;
}

export default RoleGuard;