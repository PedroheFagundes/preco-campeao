const Pool = require("pg").Pool;

const pool = new Pool({
  user: "tgmsdcmsejhhpi",
  password: "e6353b8b825661dac8247bd39fd03989de6be047d03c774afbdd8a96e77caf39",
  host: "ec2-3-220-59-239.compute-1.amazonaws.com",
  port: 5432,
  database: "d1mbbslenenm8o",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
