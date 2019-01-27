import React from 'react';
import { Link } from 'gatsby';
import { Breadcrumb } from 'antd';

const { Item: BreadcrumbItem } = Breadcrumb;

const BreadcrumbNavidation = ({ node }) => (
  <Breadcrumb separator=">">
    {node.name !== 'County' ? (
      <BreadcrumbItem>
        <Link to={'/documentation/'}>County</Link>
      </BreadcrumbItem>
    ) : null}
    {node.breadcrumbPath1 ? (
      <BreadcrumbItem>
        <Link to={node.breadcrumbPath1}>{node.breadcrumbName1}</Link>
      </BreadcrumbItem>
    ) : null}
    {node.breadcrumbPath2 ? (
      <BreadcrumbItem>
        <Link to={node.breadcrumbPath2}>{node.breadcrumbName2}</Link>
      </BreadcrumbItem>
    ) : null}
    {node.breadcrumbPath3 ? (
      <BreadcrumbItem>
        <Link to={node.breadcrumbPath3}>{node.breadcrumbName3}</Link>
      </BreadcrumbItem>
    ) : null}
    <BreadcrumbItem>{node.name}</BreadcrumbItem>
  </Breadcrumb>
);

export default BreadcrumbNavidation;
