import React from 'react';
import { Link } from 'gatsby';

const BreadcrumbNavidation = ({ node }) => (
  <nav className="breadcrumb" aria-label="breadcrumbs">
    <ul>
      {node.name !== 'County' ? (
        <li>
          <Link to={'/documentation/'}>County</Link>
        </li>
      ) : null}
      {node.breadcrumbPath1 ? (
        <li>
          <Link to={node.breadcrumbPath1}>{node.breadcrumbName1}</Link>
        </li>
      ) : null}
      {node.breadcrumbPath2 ? (
        <li>
          <Link to={node.breadcrumbPath2}>{node.breadcrumbName2}</Link>
        </li>
      ) : null}
      {node.breadcrumbPath3 ? (
        <li>
          <Link to={node.breadcrumbPath3}>{node.breadcrumbName3}</Link>
        </li>
      ) : null}
      <li className="is-active">
        <a href="#" aria-current="page">
          {node.name}
        </a>
      </li>
    </ul>
  </nav>
);

export default BreadcrumbNavidation;
