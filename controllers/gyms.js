let knex = require('../db/knex.js');

module.exports = {

  main: (req, res, next) => {
    knex('pokemon')
      .then((dbPokemon) => {
        knex('trainers')
          .then((dbTrainers) => {
            res.render('gyms', { pokemon: dbPokemon, trainers: dbTrainers });
          })
      })
  },

  add: (req, res) => {
    knex('pokemon')
      .where('id', req.params.id)
      .update({ in_gym: true })
      .then((results) => {
        req.session.inGym.push(results);
        req.session.save(() => {
          res.redirect('/gyms')
        })
      })
  },

};