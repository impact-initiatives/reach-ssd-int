const isBrowser = typeof window !== 'undefined';

const getUser = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {};

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user));

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false;
  if (
    username === process.env.GATSBY_USERNAME &&
    password === process.env.GATSBY_PASSWORD
  ) {
    setUser({ username, password });
    return window.location.replace('/');
  }
  return false;
};

export const isLoggedIn = () => {
  if (!isBrowser) return false;
  if (window.location.host === 'localhost') return true;
  const user = getUser();
  return (
    user.username === process.env.GATSBY_USERNAME &&
    user.password === process.env.GATSBY_PASSWORD
  );
};

export const logout = () => {
  if (!isBrowser) return false;
  setUser({});
  return window.location.replace('/');
};
