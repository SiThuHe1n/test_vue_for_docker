module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true, // Enable/disable filename hashing
    devServer: {
      port: 8080,
      open: true, // Open the browser after server is started
    },
    lintOnSave: false, // Disable linting on save
    productionSourceMap: false, // Disable source maps in production
  };