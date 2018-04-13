var express = require('express');
var router = express.Router();
var mysql=require('mysql')


var pool=mysql.createPool({
  host:"localhost",
  user:"root",
  password:"root",
  database:"jgr"
 })
 
/* GET home page. */
router.post('/', function(req, res, next) {

  res.header("Access-Control-Allow-Origin","*")
  pool.query(`select * from time where state='${req.body.id}'`,function(err,rows){
    console.log(req.body.id)
    // console.log(err)
    res.send(rows)
  })

});
router.post('/del', function(req, res, next) {

  res.header("Access-Control-Allow-Origin","*")
  pool.query(`delete time where id='${req.body.id}'`,function(err,rows){
    console.log(req.body.id)
    // console.log(err)
    res.send(rows)
  })

});
module.exports = router;
