import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { login } from 'redux/user/user-operations';
import { removeError } from 'redux/user/user-slice';
import { getError } from 'redux/user/user-selectors';

import LoginForm from 'components/LoginForm';

const LoginPage = () => {
  const error = useSelector(getError);
  console.log(error);

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(login(data));
  };

  useEffect(() => {
    dispatch(removeError());
  }, [dispatch]);

  return (
    <>
      <LoginForm onSubmit={onSubmit}></LoginForm>
    </>
  );
};

export default LoginPage;
