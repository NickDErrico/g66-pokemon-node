let knex = require('../db/knex.js');

module.exports = {

  main: (req, res, next) => {
    knex('pokemon').orderBy('updated_at', 'desc')
      .then((dbPokemon) => {
        knex('trainers')
          .then((dbTrainers) => {
            res.render('pokemon', { title: 'Express', trainers: dbTrainers, pokemon: dbPokemon });
          });
      })
  },

  add: (req, res) => {
    knex('pokemon')
      .insert({
        name: req.body.name,
        trainer_id: req.body.trainer_id,
        cp: req.body.cp,
        in_gym: req.body.in_gym
      }, '*')
      .then(() => {
        res.redirect('/')
      })
  },

  showPokemon: (req, res, next) => {
    knex('pokemon')
      .where('pokemon.id', req.params.id)
      .then((dbPokemon) => {
        knex('trainers')
          .then((dbTrainers) => {
            res.render('showPokemon', { trainers: dbTrainers, pokemon: dbPokemon[0] });
          })
      })
  }


};