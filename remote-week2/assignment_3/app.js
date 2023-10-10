// Create express application
const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());  // for parsing application/json

//

// Set up database connection
const db = mysql.createPool({
    host: 'database-1.cj43cesyx1nx.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'jason24838321',
    database: 'assignment'
});

//

// Implement User Sign Up API
app.post('/users', async (req, res) => {
    const { name, email, password } = req.body;
    // Perform input validation
    const nameRegex = /^[a-zA-Z0-9]+$/;
    if (!nameRegex.test(name)) {
        return res.status(400).json({ error: 'Invalid name format' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }
    let passwordCriteria = 0;
    if (/[A-Z]/.test(password)) passwordCriteria++;
    if (/[a-z]/.test(password)) passwordCriteria++;
    if (/\d/.test(password)) passwordCriteria++;
    if (/[\~\'\!\@\#\$\%\^\&\*\_\-\+\=\{\[\]\}\:\"\<\,\>\.\?\/\\]/.test(password)) passwordCriteria++;
    if (passwordCriteria < 3) {
        return res.status(400).json({ error: 'Password does not meet the criteria' });
    }

    try {
        const [rows] = await db.execute(
            'INSERT INTO user (name, email, password) VALUES (?, ?, ?)',
            [name, email, password]
        );
        const user = { id: rows.insertId, name, email };
        res.status(200).json({ data: { user, 'request-date': req.headers['request-date'] } });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ error: 'Email already exists' });
        } else {
            res.status(500).json({ error: 'Server error' });
        }
    }
});

//

// Implement User Query API

app.get('/users', async (req, res) => {
    const { id } = req.query;
    if (!id) {
        return res.status(400).json({ error: 'User id is required' });
    }
    try {
        const [rows] = await db.execute('SELECT * FROM user WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(403).json({ error: 'User not existing' });
        }
        const user = rows[0];
        res.status(200).json({ data: { user: { id: user.id, name: user.name, email: user.email }, 'request-date': req.headers['request-date'] } });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
