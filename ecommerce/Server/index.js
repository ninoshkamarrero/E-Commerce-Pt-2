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
app.get("/", (req,res) => {


    const queryString = "SELECT * FROM products;";
    db.query(queryString,(err,rows,fields) =>{
        
        console.log(rows);
        res.json(rows);

    });
});


app.listen(3002, () => {
    console.log('run dsads');
});

app.listen(process.env.PORT || PORT,() => {
console.log('Server running on port ${PORT}');
});