const dbConfig = require("../config/db.config.js");

const config = {
  host: "SERVER-SB1",
  dialect: "mssql",
  dialectOptions: {
    authentication: {
      type: "ntlm",
      options: {
        userName: "ADMIN25-SB1",
        password: "L1500XT@",
        domain: "192.168.0.25",
      },
      domain: "ADMIN25-SB1",
    },
    options: {
      port: 1433,
      requestTimeout: 60000,
      encrypt: false,
      trustServerCertificate: true,
      trustesDomain: true,
    },
  },
};

const Sequelize = require("sequelize");
const sequelize = new Sequelize("OrmRest", null, null, config);
// const sequelize = new Sequelize(dbConfig.database, null, null, {
//   host: dbConfig.host,
//   dialect: "mssql",
//   dialectOptions: {
//     authentication: {
//       domain: "SERVER-SB1",
//     },
//     options: {
//       requestTimeout: 60000,
//       cryptoCredentialsDetails: {
//         ciphers: "RC4-MD5",
//       },
//     },
//   },
// });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
