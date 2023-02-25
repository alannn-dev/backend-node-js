const mongoose = require('mongoose');

// Creation schéma de données (Id : automatiquement généré par Mongoose)
const thingSchema = mongoose.Schema({
  title: { type: String, required: true}, // Champ requis (Required: true)
  description: {type: String, required: true},
  imageUrl: {type: String, required: true},
  userId: {type: String, required: true},
  price: {type: Number, required: true},
});

// Export modele de données
module.exports = mongoose.model('Thing', thingSchema);