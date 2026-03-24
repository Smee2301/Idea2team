const mysql = require('mysql2');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "idea2team"
});
db.query("DESCRIBE profiles", (err, result) => {
    if (err) console.error(err);
    else console.log(JSON.stringify(result, null, 2));
    db.end();
});
