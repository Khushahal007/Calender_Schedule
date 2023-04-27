const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://calenderbackend.onrender.com',
      changeOrigin: true,
    })
  );
};

// https://calenderbackend.onrender.com