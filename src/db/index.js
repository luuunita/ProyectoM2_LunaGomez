const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "miniblog_db",
  password: "lunita222",
  port: 5432,
});

module.exports = pool;