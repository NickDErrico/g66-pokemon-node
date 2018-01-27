exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('trainers').del(),

    // Inserts seed entries
    knex('trainers').insert({ id: 1, trainer_name: "Markel" }),
    knex('trainers').insert({ id: 2, trainer_name: "Jacob" }),
    knex('trainers').insert({ id: 3, trainer_name: "Ella" }),
    knex('trainers').insert({ id: 4, trainer_name: "Valencia" })

  );
};