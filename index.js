const express = require('express')
var app =  express()
app.listen(3000)

//JWT
var jwt = require("jsonwebtoken");
var secret = "QWERTYUIOPasdfghjkl";

app.get('/', function(req,res){
    var token = jwt.sign(
        {
            hoten: "NguyenVanA",
            namSinh: 1988
        },
        secret,
        {expiresIn: 10}
    );
    res.send(token);
})

app.get('/check/:token',function(req,res){
    var t = req.params.token;

    jwt.verify(
        t,
        secret,
        function(err, decoded){
            if(err){
                res.send('Error!')
            }else{
                res.json({
                    "value1": decoded.hoten,
                    "value2": decoded.namSinh
                })
            }
        }
    );
});
