import React from 'react';

import PageFooter from '../components/page-footer';
import { logout } from '../utils/auth';

const LoginPage = () => (
  <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <button className="button is-danger" onClick={logout}>
            Log out
          </button>
        </div>
      </div>
    </div>
    <PageFooter />
  </section>
);

export default LoginPage;
