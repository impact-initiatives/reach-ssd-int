import React, { useState } from 'react';
import { Link } from 'gatsby';

interface Props {
  tab: string;
}

interface State {
  menuOpen: boolean;
}

const onClick = (state: State, setState: Function) =>
  setState({ menuOpen: !state.menuOpen });

const PageHeader = ({ tab }: Props) => {
  const [state, setState] = useState({ menuOpen: false });
  const isActive = state.menuOpen ? ' is-active' : '';
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/" aria-label="Home page">
          INT
        </Link>
        <button
          className={`button is-white navbar-burger burger${isActive}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => onClick(state, setState)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div className={`navbar-menu${isActive}`}>
        <div className="navbar-start">
          <Link
            className={`navbar-item is-tab${tab === '/' ? ' is-active' : ''}`}
            to="/"
            aria-label="Home page"
          >
            Home
          </Link>
          <Link
            className={`navbar-item is-tab${
              tab === '/documentation' ? ' is-active' : ''
            }`}
            to="/documentation"
            aria-label="Documentation"
          >
            Documentation
          </Link>
          <Link
            className={`navbar-item is-tab${
              tab === '/maps' ? ' is-active' : ''
            }`}
            to="/maps"
            aria-label="Interactive maps"
          >
            Maps
          </Link>
        </div>
        <div className="navbar-end"></div>
      </div>
    </nav>
  );
};

export default PageHeader;
