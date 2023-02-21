import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notiflix from 'notiflix';

import { fetchCurrentUser } from 'redux/user/user-operations';
import { getIsLoading } from 'redux/user/user-selectors';

import LoginPage from 'pages/LoginPage';
import UserPage from 'pages/UserPage';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AddBonusPage from 'pages/AddBonusPage';
Notiflix.Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '10px',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 3000,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  plainText: true,
  showOnlyTheLastOne: false,
  clickToClose: false,
  pauseOnHover: true,
  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  zindex: 4001,
  fontFamily: 'Quicksand',
  fontSize: '13px',
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: 'fade',
  closeButton: false,
  useIcon: true,
  useFontAwesome: false,
  fontAwesomeIconStyle: 'basic',
  fontAwesomeIconSize: '34px',
  success: {
    background: '#32c682',
    textColor: '#fff',
    childClassName: 'notiflix-notify-success',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-check-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(50,198,130,0.2)',
  },
  failure: {
    background: '#ff5549',
    textColor: '#fff',
    childClassName: 'notiflix-notify-failure',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-times-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(255,85,73,0.2)',
  },
  warning: {
    background: '#eebf31',
    textColor: '#fff',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
  info: {
    background: '#26c0d3',
    textColor: '#fff',
    childClassName: 'notiflix-notify-info',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-info-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(38,192,211,0.2)',
  },
});

const App = () => {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isLoading && (
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<UserPage />} />
              <Route path="/add" element={<AddBonusPage />} />
            </Route>
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      )}{' '}
    </>
  );
};

export default App;
