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
  return false;
};

export const isLoggedIn = () => {
  if (!isBrowser) return false;
  const user = getUser();
  return Boolean(user.username) && Boolean(user.password);
};

export const logout = () => {
  if (!isBrowser) return false;
  setUser({});
  return window.location.replace('/');
};
