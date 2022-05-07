// Update with your config settings.

module.exports = {
  client: "postgresql",
  connection: {
    database: "knowlegde",
    user: "postgres",
    password: "postgres",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
