const mysql = require('mysql2');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "idea2team"
});

const runAlters = async () => {
    const queries = [
        "ALTER TABLE profiles ADD COLUMN github VARCHAR(255);",
        "ALTER TABLE profiles ADD COLUMN linkedin VARCHAR(255);"
    ];
    for (const query of queries) {
        await new Promise(resolve => {
            db.query(query, (err) => {
                if (err) console.log(err.message);
                resolve();
            });
        });
    }
    console.log("Altered successfully.");
    db.end();
};
runAlters();
