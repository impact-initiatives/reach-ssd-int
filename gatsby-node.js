const path = require('path');

exports.createPages = ({ graphql, actions: { createPage } }) =>
  graphql(`
    {
      allDocumentationMatrixCsv {
        edges {
          node {
            path
          }
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) return Promise.reject(errors);
    data.allDocumentationMatrixCsv.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: path.resolve('src/templates/documentation.tsx'),
      });
    });
  });
