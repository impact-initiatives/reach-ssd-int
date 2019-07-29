import React from 'react';
import ukAid from '../images/uk-aid.svg';
import reach from '../images/reach.svg';

const PageFooter = () => (
  <footer className="footer">
    <nav className="level">
      <div className="level-left">
        <div className="level-item">
          <a href="https://www.gov.uk/world/organisations/dfid-south-sudan">
            <img src={ukAid} style={{ height: 128 }} />
          </a>
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          <a href="https://www.reach-initiative.org">
            <img src={reach} style={{ height: 64 }} />
          </a>
        </div>
      </div>
    </nav>
  </footer>
);

export default PageFooter;
