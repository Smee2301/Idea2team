const mysql = require('mysql2');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "idea2team"
});

function tryQuery(q) {
    return new Promise((resolve) => {
        db.query(q, (err, result) => {
            if (err) console.error("Error for query [" + q + "]:", err.sqlMessage || err);
            else console.log("Success for query [" + q + "]");
            resolve();
        });
    });
}

(async () => {
    console.log("Setting up Workspace Tables...");
    
    // Tasks table
    await tryQuery(`
        CREATE TABLE IF NOT EXISTS tasks (
            task_id INT AUTO_INCREMENT PRIMARY KEY,
            project_id INT,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            status ENUM('todo', 'inProgress', 'done') DEFAULT 'todo',
            priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
            due_date DATE,
            assignee_id INT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Chat messages table
    await tryQuery(`
        CREATE TABLE IF NOT EXISTS chat_messages (
            message_id INT AUTO_INCREMENT PRIMARY KEY,
            project_id INT,
            sender_id INT,
            message TEXT NOT NULL,
            sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Notes table
    await tryQuery(`
        CREATE TABLE IF NOT EXISTS notes (
            note_id INT AUTO_INCREMENT PRIMARY KEY,
            project_id INT,
            title VARCHAR(255),
            content TEXT,
            last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    `);

    // Files table (already have one maybe, but let's be sure)
    await tryQuery(`
        CREATE TABLE IF NOT EXISTS workspace_files (
            file_id INT AUTO_INCREMENT PRIMARY KEY,
            project_id INT,
            uploader_id INT,
            filename VARCHAR(255),
            original_name VARCHAR(255),
            uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);

    db.end();
})();
