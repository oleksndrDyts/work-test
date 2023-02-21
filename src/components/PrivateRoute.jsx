import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/user/user-selectors';

const PrivateRoute = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
