const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff'); // Utilisation router stuff
const userRoutes = require('./routes/user'); // Utilisation router user
const path = require('path');

// CONNEXION APP À LA BDD
mongoose.connect('mongodb://username:password@host:port/database?options',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

// Prend toutes les requêtes avec Content-Type application/json
// & met à disposition leur body directement sur l'objet req :
app.use(express.json());

// HEADERS pour autoriser appel http entre seveurs (Config sur l'objet response)
app.use((req, res, next) => {
  // Accéder à notre API depuis n'importe quelle origine
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  // Ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin, etc...)
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  // Envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/stuff', stuffRoutes); // Ajout router stuffRoute à la route /api/stuff
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;



// -------------------------------

// POST
/* app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Objet créé !'
  });
}); 

// GET
app.get('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);
});

module.exports = app;



-----------------------------------------

/* const express = require('express');

const app = express();

app.use((req, res, next) => { // Next() pour passer à l'exécution du middlewear suivant
  console.log('Requête reçue !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

module.exports = app; */