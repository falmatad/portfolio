const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const sslRedirect = require('heroku-ssl-redirect');

const db = mysql.createPool({
    host: "us-cdbr-east-02.cleardb.com",
    user: "bd7768d53cf021",
    password: "96d5b738",
    database: "heroku_f4572b416ed836a"
})

const port = process.env.PORT || 5000;

require('dotenv').config();

app.listen(port, () => {
    console.log("running on port 5000")
})

// middlewares that are a must 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(sslRedirect())

// form post this url 'api/insert-form'
// app.post('api/insert-form', (req, res) => {

//     const professionalXpName = req.body.professionalXpName;
//     const professionalXpDate = req.body.professionalXpDate;
//     const professionalXpDetail = req.body.professionalXpDetail;

//     const sqlInsert = "INSERT INTO professional_Xp (professionalXpName, professionalXpDate, professionalXpDetail) VALUES (?, ?, ?);"
//     db.query(sqlInsert, [professionalXpName, professionalXpDate, professionalXpDetail], (err, result) => {
//         console.log(result)
//     })
// })

app.get('/api/get', (req, res) => {

    // const professionalXpName = req.body.data.professionalXpName;
    // const professionalXpDate = req.body.data.professionalXpDate;
    // const professionalXpDetail = req.body.data.professionalXpDetail;

    const sqlInsert = "SELECT * FROM contact_form";

    db.query(sqlInsert, (err, result) => {
        res.send(result)
    })
})

// and all other crud operations if needed 

app.post('/api/insert-form', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const company = req.body.company;
    const detailedMessage = req.body.detailedMessage;
    const contactDate = req.body.contactDate;

    const sqlInsert = "INSERT INTO contact_form (firstName, lastName, email, company, detailedMessage, contactDate) VALUES (?,?,?,?,?,?)"
    db.query(sqlInsert, [firstName, lastName, email, company, detailedMessage, contactDate], (err, results) => {
        if(err){
            console.log(err);
          } else {
            return res.status(200).json({"status": 200,"err": null,"response": results});
          }
    })
})