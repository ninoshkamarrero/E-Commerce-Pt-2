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
app.get("/", (req,res) => {});

app.listen(3002, () => {
    console.log('run dsads');
});