// Permet de verifier les infos d'authentification envoyer par le client

const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1]; // Récupération token sans la 1ere partie 'Bearer'
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
};

// middleware d'authentification dans le bon ordre sur les bonnes routes dans : ../routes/stuff