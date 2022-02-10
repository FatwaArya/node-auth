//create connection to mysql
const mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_rpl",
    multipleStatements: true,
});

db.connect((err) => {
    if (err) throw err
    else {
        console.log('Terkoneksi!')
    }
})


//export connection
module.exports = db
