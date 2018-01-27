//Update the name of the controller below and rename the file.
const home = require("../controllers/home.js");
const pokemon = require('../controllers/pokemon.js');
const trainers = require('../controllers/trainers.js');
const gyms = require('../controllers/gyms.js');
module.exports = function(app) {

  // INDEX :
  app.get('/', home.main);

  // POKEMON :
  app.get('/pokemon', pokemon.main);
  app.get('/pokemon/:id', pokemon.showPokemon);

  app.post('/pokemon', pokemon.add);

  // TRAINERS :
  app.get('/trainers', trainers.main);
  app.get('/trainer/:id', trainers.showTrainer);

  // GYMS :
  app.get('/gyms', gyms.main);
  app.get('/gyms/add/:id', gyms.add);

}