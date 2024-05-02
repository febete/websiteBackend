/*
console.log("hello world")
console.log("deneme")
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

        fs.readFile("products.html", (err,html) => {
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