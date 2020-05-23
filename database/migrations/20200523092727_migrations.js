exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments();
      table.string("username", 24).notNullable().unique().index();
      table.string("password", 36).notNullable();

      table
        .integer("role")
        .unsigned()
        .references("roles.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      table.string("upvotedOn");
      table.string("downvotedOn");
    })
    .createTable("posts", (table) => {
      table.increments();
      table.string("title", 128).notNullable().unique().index();
      table.string("description", 244).notNullable();
      table.string("materials", 244);
      table.string("video");
      table.string("instructions");
      table.integer("upvotes");
      table.integer("downvotes");

      //foreign key
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("steps", (table) => {
      table.increments();
      table.string("stepName", 244);

      // foreign key
      table
        .integer("posts_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("posts")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("posts")
    .dropTableIfExists("users");
};
