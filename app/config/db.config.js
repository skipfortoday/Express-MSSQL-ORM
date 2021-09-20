module.exports = {
  database: "OrmRest",
  host: "192.168.0.1",
  dialect: "mssql",
  dialectOptions: {
    server: "192.168.0.1",
    authentication: {
      server: "192.168.0.1",
      type: "ntlm",
    },
    options: {
      port: 1433,
      requestTimeout: 60000,
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
