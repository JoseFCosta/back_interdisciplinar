import app from './app.js';
import './app/database/conexao.js';
import './syncDatabase.js';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
