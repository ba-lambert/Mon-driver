import { Navigate } from 'react-router-dom';
import useAuth from "../../redux/hooks/useAuth.ts";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/auth/signin" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;