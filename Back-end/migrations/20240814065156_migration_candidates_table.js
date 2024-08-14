/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("candidates_local", function (table) {
    table.increments("candidate_id").primary(); // Primary key
    table.string("name").notNullable(); // Candidate name
    table
      .string("national_id")
      .notNullable() // Foreign key for national_id
      .references("national_id")
      .inTable("citizens"); // Reference to the citizens table
    table
      .integer("list_id")
      .unsigned()
      .notNullable() // Foreign key for list_id
      .references("list_id")
      .inTable("lists"); // Reference to the lists table
    table.integer("vote_count").defaultTo(0); // Vote count
    table.boolean("activation").defaultTo(true); // Activation status
    table.timestamps(true, true); // Created at and updated at timestamps
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("candidates_local");
};
