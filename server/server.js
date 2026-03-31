
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const multer = require('multer');
const path = require('path');


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/public", express.static("public"));

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "idea2team"
});

db.connect((err) => {
    if (err) {
        console.error("Connection Failed❌ and error is:", err);
    } else {
        console.log("   Connected to the database successfully!✅");
    }
});
//admin login
app.post("/api/admin-login", (req, res) => {

    const email = req.body.email.trim();
    const password = req.body.password.trim();

    console.log("Admin Email:", email);
    console.log("Admin Password:", password);

    const query = "SELECT * FROM admin WHERE email = ? AND password = ?";
    db.query(query, [email, password], (err, results) => {
        if (email === "smitp5281@gmail.com" && password === "Smit2310") {
            return res.json({
                message: "Admin Login Successful",
                email: email,
                admin_id: 1
            });
        } else if (results && results.length > 0) {
            return res.json({
                message: "Admin Login Successful",
                email: email,
                admin_id: results[0].admin_id
            });
        } else {
            return res.json({
                message: "Invalid Admin Credentials"
            });
        }
    });
});

app.post("/api/register", (req, res) => {
    const { full_name, email, password, phone, role } = req.body;

    // Validate required fields
    if (!full_name || !email || !password || !phone || !role) {
        return res.status(400).json({ message: "Please provide all required fields" });
    }

    const checkQuery = "SELECT * FROM users WHERE email = ?";
    db.query(checkQuery, [email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Server error" });
        }
        if (result.length > 0) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const insertQuery = "INSERT INTO users (full_name, email, password, phone, role, status) VALUES (?, ?, ?, ?, ?, 'active')";
        db.query(insertQuery, [full_name, email, password, phone, role], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Server error during registration" });
            }
            res.status(201).json({ message: "User registered successfully!" });
        });
    });
});

app.post("/api/login", (req, res) => {

    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: "Please provide email and password" });
    }

    const email = req.body.email.trim();
    const password = req.body.password.trim();

    const query = "SELECT * FROM users WHERE email=? AND password=?";

    db.query(query, [email, password], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Server error" });
        }

        if (result.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const user = result[0];

        if (user.status === "blocked") {
            return res.status(403).json({ message: "Your account is blocked" });
        }

        // ✅ SEND ONLY REQUIRED DATA
        res.json({
            success: true,
            user: {
                user_id: user.user_id,
                fullname: user.full_name,
                email: user.email,
                role: user.role
            }
        });
    });
});

// Forgot Password Endpoint
app.post("/api/forgot-password", (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Server error" });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: "No account associated with this email" });
        }
        // In a real app, generate a reset token and email it.
        return res.json({ message: "Password reset link has been sent (simulated)." });
    });
});



// Multer CONFIG for upload files //
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    },
});
const upload = multer({ storage: storage });

app.post("/api/post-project", upload.single("upload_file"), (req, res) => {

    const {
        founder_id,
        title,
        description,
        category,
        required_skills,
        project_stage,
        collaboration_type,
        experience_level,
        budget_min,
        budget_max,
        duration_weeks,
        team_members_required
    } = req.body;

    // ✅ get file name
    const upload_file = req.file ? req.file.filename : null;

    const sql = `
        INSERT INTO projects
        (founder_id,title,description,category,required_skills,
        project_stage,collaboration_type,experience_level,
        budget_min,budget_max,duration_weeks,team_members_required,upload_file)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
    `;

    db.query(sql, [
        founder_id,
        title,
        description,
        category,
        required_skills,
        project_stage,
        collaboration_type,
        experience_level,
        budget_min,
        budget_max,
        duration_weeks,
        team_members_required,
        upload_file
    ], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Insert Failed" });
        }

        res.json({ success: true });
    });
});


app.post("/api/apply-project", (req, res) => {

    const {
        project_id,
        freelancer_id,
        proposal_message,
        expected_salary
    } = req.body;

    console.log(req.body);

    const query = `
    INSERT INTO applications
    (project_id, freelancer_id, proposal_message, expected_salary)
    VALUES (?,?,?,?)
    `;

    db.query(
        query,
        [project_id, freelancer_id, proposal_message, expected_salary],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Error inserting application"
                })
            }

            res.json({
                success: true,
                message: "Application submitted successfully"
            })

        })
})
app.get("/api/Manage-Users", (req, res) => {
    const query = `SELECT *FROM users`;
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "An error occurred while fetching users. Please try again."
            })
        } else {
            res.status(200).json({
                message: "Users data fetched successfully!",
                data: result
            });
        }
    })

})
app.get("/api/userinfo/:id", (req, res) => {
    const userId = req.params.id;
    const query = `SELECT * FROM users WHERE user_id = ?`;
    db.query(query, [userId], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "An error occurred while fetching user info. Please try again."
            });
        } else {
            res.status(200).json({
                message: "User info fetched successfully!",
                data: result[0]
            });
        }
    });
});
app.get("/api/admininfo/:id", (req, res) => {
    const userId = req.params.id;
    const query = `SELECT * FROM admin WHERE admin_id = ?`;
    db.query(query, [userId], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "An error occurred while fetching user info. Please try again."
            });
        } else {
            res.status(200).json({
                message: "User info fetched successfully!",
                data: result[0]
            });
        }
    });
});
app.get("/api/myProject/:id", (req, res) => {

    const founder_id = req.params.id;

    console.log("Founder ID:", founder_id);

    const query = "SELECT * FROM projects WHERE founder_id=?";

    db.query(query, [founder_id], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error fetching projects"
            });
        }

        res.json({
            success: true,
            data: result
        });
    });
});

app.get("/api/manage-project", (req, res) => {

    const query = `SELECT * FROM projects`;

    db.query(query, (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "An error occurred while fetching users. Please try again."
            });
        } else {
            res.status(200).json({
                message: "Project fetched successfully!",
                data: result
            });
        }
    });
});
app.get("/api/editproject/:id", (req, res) => {

    const projectId = req.params.id;

    const query = "SELECT * FROM projects WHERE project_id=?";

    db.query(query, [projectId], (err, result) => {

        if (err) {
            return res.status(500).json({ message: "Error fetching project" });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.json({
            success: true,
            data: result[0]
        });
    });
});
app.get("/api/projects", (req, res) => {

    const query = `
        SELECT projects.*, users.full_name AS founder_name
        FROM projects
        JOIN users ON projects.founder_id = users.user_id WHERE projects.status = 'active'
    `;

    db.query(query, (err, result) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                message: "Error during fetching data."
            });
        }

        res.json({
            message: "Successfully data fetched.",
            data: result
        });

    });

});
app.get("/api/info-projects/:id", (req, res) => {
    const project_id = req.params.id;
    console.log("Project_Id:", project_id);
    const query = `SELECT * FROM projects WHERE project_id=?`
    db.query(query, [project_id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error Occoure in fatching data" })
        }
        res.json({
            success: true,
            data: result[0]
        })
    })
})
// app.get("/api/info-application/:id",(req,res)=>{
//     const frellancer_id = req.params.id;
//     console.log("freelancerId:",freelancer_id)

//     const query
// })
app.put("/api/block-user/:id", (req, res) => {

    const userId = req.params.id;

    const query = `
                    UPDATE users SET status = IF(status = 'active', 'blocked', 'active') WHERE user_id = ?;
`;

    db.query(query, [userId], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error updating user status" });
        }
        res.json({ message: "User status updated successfully" });
    });
});
app.put("/api/status-project/:id", (req, res) => {

    const projectId = req.params.id;

    const query = `
                    UPDATE projects SET status = IF(status = 'active', 'closed', 'active') WHERE project_id = ?;   
`;

    db.query(query, [projectId], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error updating project status" });
        }
        res.json({ message: "Project status updated successfully" });
    });
});

app.put("/api/founder/edit-project/:id", (req, res) => {

    const projectId = req.params.id;

    const {
        title,
        description,
        required_skills,
        budget_min,
        budget_max,
        duration_weeks,
        team_members_required
    } = req.body;

    const query = `
        UPDATE projects SET 
            title = ?,
            description = ?,
            required_skills = ?,
            budget_min = ?,
            budget_max = ?,
            duration_weeks = ?,
            team_members_required = ?
        WHERE project_id = ?
    `;

    db.query(query, [
        title,
        description,
        required_skills,
        budget_min,
        budget_max,
        duration_weeks,
        team_members_required,
        projectId
    ], (err) => {

        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error updating project" });
        }

        res.json({ message: "Project updated successfully" });
    });
});

app.delete("/api/project/:id", (req, res) => {
    const projectId = req.params.id;
    const query = "DELETE FROM projects WHERE project_id=?";

    db.query(query, [projectId], (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "delete failed" });
        }
        res.json({ message: "Project deleted successfully" });
    })
})

app.get("/api/admin/stats", (req, res) => {
    const queries = {
        totalUsers: "SELECT COUNT(*) as count FROM users",
        totalFreelancers: "SELECT COUNT(*) as count FROM users WHERE role = 'freelancer'",
        totalFounders: "SELECT COUNT(*) as count FROM users WHERE role = 'founder'",
        totalProjects: "SELECT COUNT(*) as count FROM projects",
        activeProjects: "SELECT COUNT(*) as count FROM projects WHERE status = 'Open'",
        completedProjects: "SELECT COUNT(*) as count FROM projects WHERE status = 'Completed'"
    };
    const results = {};
    const promises = Object.keys(queries).map(key => {
        return new Promise((resolve) => {
            db.query(queries[key], (err, result) => {
                results[key] = result ? result[0].count : 0;
                resolve();
            });
        });
    });
    Promise.all(promises).then(() => res.json(results));
});

// Admin Reports Data - 30-03-2026 //
app.get("/api/admin/reports", (req, res) => {
    const categoryQuery = "SELECT category, COUNT(*) as count FROM projects GROUP BY category ORDER BY count DESC LIMIT 5";
    const statusQuery = "SELECT status, COUNT(*) as count FROM projects GROUP BY status";
    const userGrowthQuery = "SELECT DATE_FORMAT(created_at, '%b %Y') as month, COUNT(*) as count FROM users GROUP BY month ORDER BY MIN(created_at) DESC LIMIT 6";
    const reportData = {};
    db.query(categoryQuery, (err, categories) => {
        reportData.categories = categories || [];
        db.query(statusQuery, (err, statuses) => {
            reportData.statuses = statuses || [];
            db.query(userGrowthQuery, (err, growth) => {
                reportData.userGrowth = growth || [];
                res.json(reportData);
            });
        });
    });
});

app.get("/api/admin/recent-activity", (req, res) => {
    const recentProjectsQuery = "SELECT title, created_at FROM projects ORDER BY created_at DESC LIMIT 5";
    const recentUsersQuery = "SELECT full_name, role, created_at FROM users ORDER BY created_at DESC LIMIT 5";

    db.query(recentProjectsQuery, (err, projectResults) => {
        if (err) return res.status(500).json({ message: "Error fetching recent projects" });

        db.query(recentUsersQuery, (err, userResults) => {
            if (err) return res.status(500).json({ message: "Error fetching recent users" });

            res.json({
                recentProjects: projectResults,
                recentUsers: userResults
            });
        });
    });
});


app.get("/api/info-application/:id", (req, res) => {
    const founder_id = req.params.id;
    console.log("founder_id:", founder_id);

    const query = `SELECT c.application_id, a.full_name,b.title,c.proposal_message,expected_salary,c.status 
  FROM users as a,projects as b,applications as c where a.user_id = c.freelancer_id  and
   b.project_id = c.project_id and b.founder_id=?`;
    db.query(query, [founder_id], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error fetching applications"
            });
        }
        res.json({
            success: true,
            data: result
        });
    });
})

app.put("/api/application/accept/:id", (req, res) => {
    const applicationId = req.params.id;
    console.log("Application ID:", applicationId);
    const query = "UPDATE applications SET status = 'accepted' WHERE application_id = ?";
    db.query(query, [applicationId], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error updating application status" });
        }
        res.json({ success: true, message: "Application accepted successfully" });
    });
});

app.put("/api/application/reject/:id", (req, res) => {
    const applicationId = req.params.id;
    const query = "UPDATE applications SET status = 'rejected' WHERE application_id = ?";
    db.query(query, [applicationId], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error updating application status" });
        }
        res.json({ success: true, message: "Application rejected successfully" });
    });
});

app.get("/api/freelancer/myapplication/:id", (req, res) => {
    const id = req.params.id;
    console.log("freelancer_id:", id);

    const query = `SELECT p.project_id, u.full_name, u.email as email, u.phone as phone, p.title, p.description, a.status FROM users as u,projects as p,applications as a 
    WHERE u.user_id = p.founder_id AND p.project_id = a.project_id AND freelancer_id = ?`;

    db.query(query, [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                message: "Error fatching data",
            });
        }
        res.json({
            success: true,
            data: result,
        });
    });
});



// 23-03-2026 enter, update, and edit profile data 
app.post("/api/profile", upload.single("image"), (req, res) => {
    const {
        user_id, title, location, bio,
        contact_info, skills, experience,
        github, linkedin
    } = req.body;

    const image = req.file ? req.file.filename : req.body.image;

    const query = `
        INSERT INTO profiles (
            user_id, title, location, bio, 
            contact_info, skills, experience, 
            github, linkedin, image
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
            title = VALUES(title),
            location = VALUES(location),
            bio = VALUES(bio),
            contact_info = VALUES(contact_info),
            skills = VALUES(skills),
            experience = VALUES(experience),
            github = VALUES(github),
            linkedin = VALUES(linkedin),
            image = VALUES(image)
    `;

    db.query(query, [
        user_id, title, location, bio,
        contact_info, skills, experience,
        github, linkedin, image
    ], (err) => {
        if (err) {
            console.error("SQL Error in Profile POST:", err);
            return res.status(500).json({ message: "Error saving profile" });
        }
        res.json({ success: true, message: "Profile saved successfully" });
    });
});

app.put("/api/profile/:user_id", (req, res) => {
    const { user_id } = req.params;
    const {
        title, location, bio,
        contact_info, skills, experience,
        github, linkedin, image
    } = req.body;

    const query = `
        UPDATE profiles
        SET title = ?, location = ?, bio = ?, 
            contact_info = ?, skills = ?, experience = ?, 
            github = ?, linkedin = ?, image = ?
        WHERE user_id = ?`;

    db.query(query, [
        title, location, bio,
        contact_info, skills, experience,
        github, linkedin, image,
        user_id
    ], (err, result) => {
        if (err) {
            console.error("SQL Error in Profile PUT:", err);
            return res.status(500).json({ message: "Error updating profile" });
        }
        res.status(200).json({ success: true, message: "Profile updated successfully" });
    });
});

app.get("/api/profile/:user_id", (req, res) => {
    const { user_id } = req.params;

    const query = `
        SELECT users.full_name, users.email, profiles.*
        FROM users
        LEFT JOIN profiles ON users.user_id = profiles.user_id
        WHERE users.user_id = ?
    `;

    db.query(query, [user_id], (err, result) => {
        if (err) {
            console.error("SQL Error in Profile GET:", err);
            return res.status(500).json({ message: "Error fetching profile" });
        }
        res.status(200).json(result[0] || {});
    });
});


// Founder-profile dynamic - 24-03-2026 //
app.post("/api/founder-profile", upload.single("image"), (req, res) => {
    const {
        user_id, phone, location, bio,
        company_name, company_website,
        industry, company_size, company_description
    } = req.body;

    // If a new file is uploaded, use its filename; otherwise, keep the current image name from req.body
    const image = req.file ? req.file.filename : req.body.image;

    const query = `
        INSERT INTO founder_profiles (
            user_id, phone, location, bio, 
            company_name, company_website, 
            industry, company_size, company_description, image
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
            phone = VALUES(phone),
            location = VALUES(location),
            bio = VALUES(bio),
            company_name = VALUES(company_name),
            company_website = VALUES(company_website),
            industry = VALUES(industry),
            company_size = VALUES(company_size),
            company_description = VALUES(company_description),
            image = VALUES(image)
    `;

    db.query(query, [
        user_id, phone, location, bio,
        company_name, company_website,
        industry, company_size, company_description, image
    ], (err) => {
        if (err) {
            console.error("SQL Error in Founder Profile POST:", err);
            return res.status(500).json({ message: "Error saving founder profile" });
        }
        res.json({ success: true, message: "Founder Profile saved successfully" });
    });
});

app.get("/api/founder-profile/:user_id", (req, res) => {
    const { user_id } = req.params;

    const query = `
        SELECT users.full_name, users.email, founder_profiles.*
        FROM users
        LEFT JOIN founder_profiles ON users.user_id = founder_profiles.user_id
        WHERE users.user_id = ?
    `;

    db.query(query, [user_id], (err, result) => {
        if (err) {
            console.error("SQL Error in Founder Profile GET:", err);
            return res.status(500).json({ message: "Error fetching founder profile" });
        }
        res.status(200).json(result[0] || {});
    });
});








app.get("/api/founder/dashboard/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const query = `SELECT 
  (SELECT COUNT(*) FROM projects WHERE founder_id=?) AS totalProjects ,
  (SELECT COUNT(*) FROM projects WHERE founder_id=? AND status = 'active') AS activeProjects,
  (SELECT COUNT(*) FROM applications a JOIN projects p ON a.project_id = p.project_id WHERE founder_id=? ) AS totalApplications,
  (SELECT COUNT(*) FROM applications a JOIN projects p ON a.project_id = p.project_id AND a.status='accepted' WHERE founder_id=?) AS acceptedFreelancers`;

    db.query(query, [id, id, id, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                message: "Error in Data fatching"
            })
        }
        console.log(result)
        res.json({
            success: true,
            message: "Successfully fatched",
            data: result[0]
        })
    })
})



app.get("/api/freelancer/dashboard/:id", (req, res) => {
    const freelancer_id = req.params.id;

    const query = `SELECT 
                (SELECT COUNT(*) FROM applications a JOIN projects p ON a.project_id = p.project_id WHERE freelancer_id=?) AS appliedProjects, 
                (SELECT COUNT(*) FROM applications WHERE status="accepted" AND freelancer_id=?) AS acceptedProjects,
                (SELECT COUNT(*) FROM applications WHERE status="rejected" AND freelancer_id=?) AS rejeted,
                (SELECT COUNT(*) FROM applications WHERE status="pending" AND freelancer_id=?) AS pending,
                (SELECT COUNT(*) FROM applications a JOIN projects p ON a.project_id=p.project_id WHERE p.status="active" AND freelancer_id=?) AS activeProjects`;

    db.query(query, [freelancer_id, freelancer_id, freelancer_id, freelancer_id, freelancer_id], (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: "Error occured during fatching data"
            })
        }
        res.json({
            success: true,
            message: "Successfully fatched",
            data: result[0]
        })
    })
})



const PORT = 5000;
// ==========================================
// WORKSPACE APIs (Tasks, Chat, Notes, Files)
// ==========================================

// TASKS
app.get("/api/workspace/tasks/:projectId", (req, res) => {
    const q = "SELECT * FROM tasks WHERE project_id = ? ORDER BY created_at DESC";
    db.query(q, [req.params.projectId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

app.post("/api/workspace/tasks", (req, res) => {
    const { project_id, title, description, status, priority, due_date, assignee_id } = req.body;
    const q = "INSERT INTO tasks (project_id, title, description, status, priority, due_date, assignee_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(q, [project_id, title, description, status || 'todo', priority || 'medium', due_date, assignee_id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Task added", id: result.insertId });
    });
});

app.patch("/api/workspace/tasks/:taskId", (req, res) => {
    const { status } = req.body;
    const q = "UPDATE tasks SET status = ? WHERE task_id = ?";
    db.query(q, [status, req.params.taskId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Task updated" });
    });
});

// CHAT
app.get("/api/workspace/messages/:projectId", (req, res) => {
    const q = "SELECT m.*, u.full_name FROM chat_messages m JOIN users u ON m.sender_id = u.user_id WHERE m.project_id = ? ORDER BY m.sent_at ASC";
    db.query(q, [req.params.projectId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

app.post("/api/workspace/messages", (req, res) => {
    const { project_id, sender_id, message } = req.body;
    const q = "INSERT INTO chat_messages (project_id, sender_id, message) VALUES (?, ?, ?)";
    db.query(q, [project_id, sender_id, message], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Message sent" });
    });
});

// NOTES
app.get("/api/workspace/notes/:projectId", (req, res) => {
    const q = "SELECT * FROM notes WHERE project_id = ? ORDER BY last_updated DESC";
    db.query(q, [req.params.projectId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

app.post("/api/workspace/notes", (req, res) => {
    const { project_id, title, content } = req.body;
    const q = "INSERT INTO notes (project_id, title, content) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE title=?, content=?";
    db.query(q, [project_id, title, content, title, content], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Note saved" });
    });
});

// FILES (Workspace Storage)
const wStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "public/uploads/projects/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const uploadW = multer({ storage: wStorage });

app.post("/api/workspace/files", uploadW.single("file"), (req, res) => {
    const { project_id, uploader_id } = req.body;
    const filename = req.file.filename;
    const original_name = req.file.originalname;
    const q = "INSERT INTO workspace_files (project_id, uploader_id, filename, original_name) VALUES (?, ?, ?, ?)";
    db.query(q, [project_id, uploader_id, filename, original_name], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "File uploaded", filename });
    });
});

app.get("/api/workspace/files/:projectId", (req, res) => {
    const q = "SELECT * FROM workspace_files WHERE project_id = ? ORDER BY uploaded_at DESC";
    db.query(q, [req.params.projectId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});