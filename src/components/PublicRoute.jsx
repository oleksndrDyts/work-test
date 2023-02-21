import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/user/user-selectors';

const PublicRoute = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoute;
