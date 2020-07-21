const express = require('express');
const app = express()
const fs = require('fs')
const mysql = require('mysql');
const http = require('http').Server(app)
const port = 3000;
const db = require('./config/database.js')
const connection = mysql.createConnection(db);


app.set('views', `${__dirname}/public`)
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)
app.use(
    express.static('public', {
        extensions: ['html'],
    }),
)

app.get("/", (req, res) => {
    console.log(db);
    res.render('index')
})
app.get("/user/list", (req, res) => {
    connection.query('select * from user', (err, rows) => {
        console.log(rows);
    })
    res.render('index')
})
app.get("/user/insert", (req, res) => {
    const sql = `insert into user (user_id, user_email, user_name, user_phone, user_address, insert_date) values ('aaa', 'eeA@ee', 'jade', '0107440', '대구시', now())`
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    })
    res.render('index')
})

http.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${port}`);
})
// app.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`server is running on ${port}`);
// })