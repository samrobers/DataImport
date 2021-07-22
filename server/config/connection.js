const oracledb = require("oracledb");
try {
  oracledb.initOracleClient({ libDir: "C:\\oracle\\instantclient_19_6" });
} catch (err) {
  console.error("Whoops!");
  console.error(err);
  process.exit(1);
}

module.exports = mongoose.connection;
