const mysql = require('mysql2');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "idea2team"
});

const alters = [
    "ALTER TABLE profiles ADD COLUMN contact_info TEXT;",
    "ALTER TABLE profiles ADD COLUMN skills TEXT;",
    "ALTER TABLE profiles ADD COLUMN experience TEXT;",
    "ALTER TABLE profiles ADD COLUMN portfolio TEXT;",
    "ALTER TABLE profiles ADD COLUMN pricing TEXT;",
    "ALTER TABLE profiles ADD COLUMN availability VARCHAR(255);",
    "ALTER TABLE profiles ADD COLUMN social_links TEXT;"
];

const runAlters = async () => {
    for (const query of alters) {
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
