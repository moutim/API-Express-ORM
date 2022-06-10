const express = require('express');

const app = express();

app.use(express.json());

const routes = require('./routes/routes');
app.use(routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});