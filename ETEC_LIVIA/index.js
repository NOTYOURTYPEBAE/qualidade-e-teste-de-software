const express = require("express");// importando o express
const app = express(); //incluindo o express

app.set('view engine', 'ejs')

app.get("/", function(req,res){
    res.render("index")
})
app.get("/perfil",function(req,res){
    res.render("perfil")
})

//Define o usu da pasta "public" para uso de arquivos estaticos
app.use(express.static('public'))

app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro")
    }
})
