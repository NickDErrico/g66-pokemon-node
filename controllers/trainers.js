let knex = require('../db/knex.js');

module.exports = {

  main: (req, res, next) => {
    knex('trainers')
      .then((dbTrainers) => {
        res.render('trainers', { title: 'Express', trainers: dbTrainers });
      })
  },

  showTrainer: (req, res, next) => {
    knex('trainers')
      .where('trainers.id', req.params.id)
      .then((dbTrainers) => {
        knex('pokemon')
          .then((dbPokemon) => {
            res.render('showTrainer', { trainers: dbTrainers[0], pokemon: dbPokemon });
          })
      })
  }

};