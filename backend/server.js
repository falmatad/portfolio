const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2')

const db = mysql.createPool({
    host: "localHost",
    user: "root",
    password: "lyfe15atst",
    database: "createReadDataBase"
})

const port = process.env.PORT || 5000;

require('dotenv').config();

app.listen(port, () => {
    console.log("running on port 5000")
})


app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//     const sqlInsert = "INSERT INTO professional_Xp (professionalXpName, professionalXpDate, professionalXpDetail) VALUES ('Youth Enrichment League', '9999-12-31 23:59:59', 'I tought kids coding');"
//     db.query(sqlInsert, (err, result) => {
//         res.send("Bismillah")
//     })
// })

// app.post('api/insert-form', (req, res) => {
//     const sqlInsert = "INSERT INTO contact_form (firstName, lastName, email, company, detailedMessage, contactDate) VALUES (?,?,?,?,?,?)"
//     db.query(sqlInsert, [firstName, lastName, email, company, detailedMessage, contactDate], (err, result) => {
//     })
// })