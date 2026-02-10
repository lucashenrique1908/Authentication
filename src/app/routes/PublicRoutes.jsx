import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Providers/authContext';

const PublicRoutes = () => {
  const { isAuthenticated, authReady } = useAuth();
  if (!authReady) return null;

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoutes;
