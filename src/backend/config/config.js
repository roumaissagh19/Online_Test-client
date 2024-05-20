const mysql = require("mysql");
// ******************       Configuration de la connexion à la base de données     **********************
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pfe",
});
module.exports = connection;


