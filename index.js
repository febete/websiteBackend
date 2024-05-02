const express = require("express");
const app = express();

app.set("view engine" , "ejs");



//routes yapısı
app.use("/products/:id", function( req, res) {
    res.render("urun-details");
    //res.send("Product detail" + req.params.id);
   // res.send("Product detail")
});


app.use("/products", function( req, res) {
    res.render("urunler");
    //res.send("ProductsSSS")
});


app.use("/", function( req, res) {
    res.render("index");
    //res.send("anasayfaAAA")
});


app.listen(3000, () =>  {
    console.log("listening on port 3000")
});






/*
console.log("hello world")s
console.log("deneme")

var http = require("http");  //node modules => http ,fs, os 
var fs = require("fs"); //dosya oluşturma , okuma , silme , ismini değiştirme))

var server = http.createServer((req ,res ) =>{
    console.log(req.url);
    if(req.url == "/")
    {
        fs.readFile("index.html", (err , html) => {
            
            res.write(html);
            res.end();
            //res.write("<h1> anasayfa </h1>");

        });

    }else if(req.url == "/urunler")
    {

        fs.readFile("urunler.html", (err,html) => {
            res.write(html);
            res.end();
        })

        //res.write("<h1> urunler sayfası </h1>");

    }else 
    {
        fs.readFile("404.html", (err ,html) => {

            res.write(html);
            res.end();
        })
        //res.write("<h1> sayfa bulunamadı </h1>");

    }


    //res.end();
})

server.listen(3000, () => {
    console.log("node.js server at port 3000");
})

*/