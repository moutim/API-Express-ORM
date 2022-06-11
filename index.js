const express = require('express');
require('express-async-errors');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

const routes = require('./routes/routes');
app.use(routes);

app.use(middlewares.errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});