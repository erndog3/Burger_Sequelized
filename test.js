// get the client 
//const mysql = require('mysql2');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/whoppers_db');


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// create the connection to database 
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'whoppers_db'
// }, (err, res) => {
//     console.log('some err', err, 'some resss', res)
// });