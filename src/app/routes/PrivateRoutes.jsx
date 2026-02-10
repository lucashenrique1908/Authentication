import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Providers/authContext';

const PrivateRoutes = () => {
  const { isAuthenticated, authReady } = useAuth();

  if (!authReady) return null; 

   return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;


};

export default PrivateRoutes;
