import { message } from 'antd';

const isBrowser = typeof window !== 'undefined';

const getUser = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {};

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user));

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false;
  if (username === 'reach-ssd' && password === 'ssd-reach') {
    setUser({
      username: 'reach-ssd',
      password: 'ssd-reach',
    });
    return window.location.replace('/');
  }
  message.error('Login failed');
  return false;
};

export const isLoggedIn = () => {
  if (!isBrowser) return false;
  const user = getUser();
  return Boolean(user.username) && Boolean(user.password);
};

export const isLoginPage = () => {
  if (!isBrowser) return false;
  return window.location.pathname === '/login/';
};

export const getCurrentUser = () => isBrowser && getUser();

export const logout = () => {
  if (!isBrowser) return false;
  setUser({});
  return window.location.replace('/');
};
