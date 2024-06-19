const express = require('express');
const morgan = require('morgan');

const cidadeRouter = require('./routes/cidade');
const clientesRouter = require('./routes/clientes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/cidades', cidadeRouter);
app.use('/api/v1/clientes', clientesRouter);

module.exports = app;