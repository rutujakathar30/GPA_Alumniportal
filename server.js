

const express = require("express");
const mysql = require("mysql");
const server = express();
var cors = require("cors");



const port=process.env.PORT || 3001;

server.listen(port, () => console.log("server is up"));


server.use(cors());
server.use(express.json());

if(process.env.JAWSDB_URL)
{
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
}else
{
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "alumni_db",
});
}
connection.connect();

//get users list
server.get("/users", (req, res) => {
  connection.query("SELECT * from users", function (err, rows) {
    if (err) throw err;

    res.send(rows);
  });
});

//get user by id
server.get("/users/:id", (req, res) => {
  connection.query(
    `SELECT * from users where id=${parseInt(req.params.id)}`,
    function (err, rows) {
      if (err) throw err;

      res.send(rows);
    }
  );
});

//create new user

server.post("/users", (req, res) => {
  connection.query(
    `insert into users (first_name, middle_name, last_name, gender, email, password, address1, address2, city, state, country, branch, degree, year_of_passing, is_active ) values('${
      req.body.first_name
    }','${req.body.middle_name}','${req.body.last_name}','${
      req.body.gender
    }','${req.body.email}','${req.body.password}','${req.body.address1}','${
      req.body.address2
    }','${req.body.city}','${req.body.state}','${req.body.country}','${
      req.body.branch
    }','${req.body.degree}','${req.body.year_of_passing}',${false})`,
    function (err, rows) {
      if (err) throw err;

      res.send(rows);
    }
  );
});

// update the user

server.put("/users/:id", (req, res) => {
  //
  connection.query(
    `update users set 
        first_name ='${req.body.first_name}',
        last_name ='${req.body.last_name}' ,
      middle_name ='${req.body.middle_name}' ,
      gender ='${req.body.gender}' ,
      email ='${req.body.email}',
      address1 ='${req.body.address1}',
      address2 ='${req.body.address2}',
      city ='${req.body.city}',
      state ='${req.body.state}',
      country ='${req.body.country}',
      branch ='${req.body.branch}',
      degree ='${req.body.degree}',
      year_of_passing ='${req.body.year_of_passing}'
      where id=${parseInt(req.params.id)}  `,
    function (err, rows) {
      if (err) throw err;

      res.send(rows);
    }
  );
});

//activate and deactivate user
server.get("/users/activate/:id", (req, res) => {
  const queryString = `update users set is_active = 1 where id=${req.params.id} `;
  connection.query(queryString, (err, row) => {
    res.send(queryString);
  });
});

server.get("/users/deactivate/:id", (req, res) => {
  const queryString = `update users set is_active = 0 where id=${req.params.id} `;
  connection.query(queryString, (err, row) => {
    res.send(queryString);
  });
});

//login user
server.post("/users/login", (req, res) => {
  connection.query(
    `SELECT * from users where email='${req.body.email}' and password = '${req.body.password}'`,
    function (err, rows) {
      if (err) throw err;

      res.send(rows);
    }
  );
});

//get events
server.get("/events", (req, res) => {
  connection.query(
    `select  *
     from Events`,
    (err, rows) => {
      if (err) throw err;

      res.send(rows);
    }
  );
});

// create event

server.post("/events", (req, res) => {
  connection.query(
    `insert into events 
  (title,date,description,time,venue)
  values('${req.body.title}','${req.body.date}','${req.body.description}','${req.body.time}', '${req.body.venue}')`,
    (err, rows) => {
      if (err) throw err;

      res.send(rows);
    }
  );
});

server.listen(3000, () => console.log("server started at 3000..."));

