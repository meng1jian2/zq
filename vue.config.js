module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.zhanqi.tv',
        changeOrigin: true
      }
    }
  }
}
