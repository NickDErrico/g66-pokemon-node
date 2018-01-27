let knex = require('../db/knex.js');

module.exports = {

  main: (req, res, next) => {
    if (!req.session.inGym) {
      req.session.inGym = [];
    }
    knex('pokemon')
      .then((dbPokemon) => {
        knex('trainers')
          .then((dbTrainers) => {
            res.render('home', { title: 'Express', pokemon: dbPokemon, trainers: dbTrainers });
          })
      })
  },


};