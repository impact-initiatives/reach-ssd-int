const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const documentationTemplate = path.resolve(`src/templates/documentation.js`);

  return graphql(`
    {
      allDocumentationMatrixCsv {
        edges {
          node {
            path
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allDocumentationMatrixCsv.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: documentationTemplate,
      });
    });
  });
};
