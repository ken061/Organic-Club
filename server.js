const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/templates/index.html");
});

app.get("/products", function(req,res){
  res.sendFile(__dirname + "/templates/products.html");
})

app.post("/sendrequest", function(req,res){
  var data = req.body
  console.log(data);
  const whatsapplink= 'https://api.whatsapp.com/send?phone=62881081943699&text=Hello my order is:\n'
  var messege = ""
  for (var k in data){
    messege = messege + "⁍ " + k[0].toUpperCase()+ (k.slice(1,)).split("_").join(" ") + " : " + data[k]+ " pcs\n";
  }
  res.redirect(whatsapplink+messege);
})

app.listen(2000,'192.168.0.19', function(){
  console.log("Server is running on port 3000");
});
//3000,"192.168.1.12"
//192.168.7.129
// 192.168.18.147
// 192.168.1.12
