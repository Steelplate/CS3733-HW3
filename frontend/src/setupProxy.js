const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app) => {
    app.use('/api',
        createProxyMiddleware({
            target: 'https://localhost:3001/',
            changeOrigin: true
        })
    );
};