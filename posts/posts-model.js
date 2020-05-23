const db = require("../database/dbConfig.js");

module.exports = {
  findById,
  findSteps,
  findStepsById,
  add,
  update,
  remove,
};
function findById(id) {
  return db("posts").where({ id }).first();
}
function findStepsById(id) {
  return db("steps").where({ id }).first();
}
function findSteps(id) {
  return db("steps")
    .join("posts", "posts.id", "steps.posts_id")
    .select("posts.title", "steps.id", "steps.stepName")
    .where("posts.id", id);
}

function add(post) {
  return db("posts").insert(post);
}
function update(change, id) {
  return db("posts").where({ id }).update(change);
}
function remove(id) {
  return db("posts").where({ id }).del();
}
