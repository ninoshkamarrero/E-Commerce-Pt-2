const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    port : 3306,
    database: 'ecommerceDatabase',
  });
<<<<<<< HEAD
app.get("/", (req,res) => {


    const queryString = "SELECT * FROM products;";
    db.query(queryString,(err,rows,fields) =>{
        
        console.log(rows);
        res.json(rows);

    });
});

=======
app.get("/", (req,res) => {});
>>>>>>> 5d93a7beba161185da26acff59a6be8a4863dcce

app.listen(3002, () => {
    console.log('run dsads');
});