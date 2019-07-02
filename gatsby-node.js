const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
  actions.setWebpackConfig({ plugins: [new MiniCssExtractPlugin({})] });
  if (stage.includes('javascript')) {
    let config = getConfig();
    config.entry.styles = './src/styles/styles.sass';
    actions.replaceWebpackConfig(config);
  }
};

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
      allGroupingMatrixCsv {
        edges {
          node {
            path
          }
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) {
      return Promise.reject(errors);
    }
    data.allDocumentationMatrixCsv.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: path.resolve('src/templates/documentation.tsx'),
      });
    });
    data.allGroupingMatrixCsv.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: path.resolve('src/templates/grouping.tsx'),
      });
    });
  });
