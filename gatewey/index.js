const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(morgan('dev'));

app.use('/characters', createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true,//esto le da el permiso para que cambie de ruta 
}));

app.use('/films', createProxyMiddleware({
    target: "http://localhost:8002",
    changeOrigin: true,//esto le da el permiso para que cambie de ruta 
}));
app.use('/planets', createProxyMiddleware({
    target: "http://localhost:8003",
    changeOrigin: true,//esto le da el permiso para que cambie de ruta 
}));



app.listen(8000, () => {
    console.log('Gateweay on port 8000');
})