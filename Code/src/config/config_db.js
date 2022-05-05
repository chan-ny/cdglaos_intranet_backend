module.exports = {
  HOST: "127.0.0.1",
  PORT: 3306,
  USER: "root",
  PASSWORD: "",
  DB: "intranet_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  authentication: {
    JwtSecret: process.env.JWT_SECRET || "secrest",
  },
};
