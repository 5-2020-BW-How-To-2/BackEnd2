exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        {
          stepName: "crack the eggs.",
          posts_id: 1,
        },
        {
          stepName: "scramble them up.",
          posts_id: 1,
        },
        {
          stepName: "cook them on the pan",
          posts_id: 1,
        },
        {
          stepName: "boil the milk",
          posts_id: 3,
        },
        {
          stepName: "add cereal",
          posts_id: 3,
        },
        {
          stepName: "wait for it to cooldown, then enjoy",
          posts_id: 3,
        },
      ]);
    });
};
