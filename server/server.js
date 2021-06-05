const express = require('express');
const app = express();

var mysql = require('mysql');

var con = mysql.createConnection({host:'localhost',user:'test',password:'test',database:'stocks'});

const  db = myql.createConnection({host:'localhost',user:'test',password:'test',database:'stocks'});

const bodyParser = require('body-parser');
const PORT = 3306;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/',function(req,res){
    var query = req.body.search;

    // console.log(query);

    var sql = "select `name` from mytable where `keyword` like '%"+query+"%'";
    console.log(sql);
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
            res.send(result);
    });
});
app.listen(PORT, function(){
    console.log("Server is running on Port:",PORT);
});