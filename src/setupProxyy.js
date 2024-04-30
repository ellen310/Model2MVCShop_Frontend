const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){

  app.use(
    createProxyMiddleware('/', {
      target: 'https://localhost:3000',
      pathRewrite: {
        '^/':''
      },
      changeOrigin: true
    })
  )


  app.use(
    createProxyMiddleware('/kauth', {
      target: 'https://kauth.kakao.com',
      pathRewrite: {
        '^/kauth':''
      },
      changeOrigin: true
    })
  )

  
  

  
};
