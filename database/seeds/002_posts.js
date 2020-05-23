exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("posts").insert([
        {
          title: "how to cook an egg",
          description: "learn how to make the best eggs",
          materials: "eggs, butter, pan",
          video: "https://www.youtube.com/watch?v=PUP7U5vTMM0",
          instructions:
            "step 1: crack the eggs. Step 2: scramble them up. Step 3: cook them on the pan",
          user_id: 2,
        },
        {
          title: "Solution to tying shoes",
          description: "Never tie your shoes again!",
          materials: "shoes, laces, duct tape",
          video: "https://www.youtube.com/watch?v=XoR80-cQbGQ",
          instructions:
            "just wrap your shoe in duct tape, why didnt you think of that?",
          user_id: 1,
        },
        {
          title: "how to make cereal",
          description: "Cereal companies do NOT want you to know this trick",
          materials: "cereal, milk, pot/pan",
          video: "https://www.youtube.com/watch?v=PUP7U5vTMM0",
          instructions:
            "just boil the milk before you add cereal, wait for it to cool down then enjoy!",
          user_id: 3,
        },
      ]);
    });
};
