var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + '/';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "accueil.html");
});

router.get("/seconde",function(req,res){
  res.sendFile(path + "ma_page.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(8080, function () {
  console.log('Mon application qui tourne sur le port 8080')
})