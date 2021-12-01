const path = require('path');

// Gatsby側での絶対パス設定の処理。
exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
        components: path.resolve(__dirname, 'src/components'),
        containers: path.resolve(__dirname, 'src/containers'),
        pages: path.resolve(__dirname, 'src/pages'),
        models: path.resolve(__dirname, 'src/models'),
      },
    },
  });
}