// Configurasi using Sequelize

const Sequelize = require('sequelize');
const db = new Sequelize('gaji', 'root', '12345', {
  //this configuration RDBMS
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = db;

// Configurasi using Query SQL

/*let mysql = require('mysql2')
//this configuration RDBMS
let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'12345',
    database:"gaji"
})

con.connect(function(err){
    if (err) throw err;
    console.log("Koneksi Berhasil")
})

module.exports = con
*/
