// nodemon server
// Pour créer un serveur Node avec Express:

const http = require('http'); // Import package HTTP natif de Node et l'utilisez pour créer un serveur

const app = require('./app'); // Import app express

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

// Ajouter la normalisation de port, 
// la gestion d'erreur
// et du logging basique à votre serveur Node
// le rend plus constant et plus facile à déboguer.

// Normalisation de port
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Gestion d'erreur
const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app); // Fonction exécutée à chaque appel effectué vers ce serveur

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port); // Config serveur pour écouter : Variable d'environnement PORT ou le port 3000

