module.exports = {
  HOST: "150.95.82.134",
  PORT: 92,
  USER: "root",
  PASSWORD: "cdglaos@234",
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
