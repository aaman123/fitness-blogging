var mysql = require('mysql');
var csvchika = require('csv-parser');
const fs = require('fs');
const csv = require('fast-csv');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const events = require('events');
const upload = require('./upload');

const server = express();

var corsOptions = {
  origin: '*',
  optionSucessStatus : 200,
}

server.use(cors(corsOptions));

server.post('/upload', upload);

server.listen(8000, () => {
  console.log('server started')
})




// let stream = fs.createReadStream("C:/Users/Aman/Downloads/SampleData.csv");

// let myArray = [];
// let csvStream = csv
// 	.parse()

// 	.on("data", (data) => {
// 		myArray.push(data);
// 	})

// 	.on("end", () => {
			
// 	});

// stream.pipe(csvStream);



// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "aman",
//   database: "student"
// });

// con.connect();


// (function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "LOAD DATA LOCAL INFILE 'C:/Users/Aman/Downloads/SampleData.csv' INTO TABLE student.sample FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' ";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });
