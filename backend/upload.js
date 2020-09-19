const IncomingForm = require('formidable').IncomingForm;
var mysql = require('mysql');
var csvchika = require('csv-parser');
const fs = require('fs');
const csv = require('fast-csv');


module.exports = function upload(req , res) {

  var form = new IncomingForm();

  form.on('file', (field, file) => {

    // let stream = fs.createReadStream(file);

    // let myArray = [];
    // let csvStream = csv
	  // .parse()

    //   .on("data", (data) => {
    //     myArray.push(data);
    //   })

	  //   .on("end", () => {
			
	  // });

    // stream.pipe(csvStream);



    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "aman",
      database: "student"
    });

    con.connect();


    (function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "LOAD DATA LOCAL INFILE ? INTO TABLE student.sample FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' ";
      con.query(sql, file, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });


  })

  form.on( 'end' , () => {
    res.json();
  })

  form.parse(req);

}