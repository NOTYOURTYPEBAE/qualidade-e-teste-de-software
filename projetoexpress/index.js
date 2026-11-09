const express=require("express");
const app=express();

app.use(express.json());
app.set('view engine', 'ejs');

app.get("/", function(req,res){
    res.render("index")
})

app.get("/perfil", function(req,res){
    res.render("perfil")
})

app.listen(8080, function(erro){
    if(erro){
        console.log("Deu erro!!")

    }else{
        console.log("Servidor iniciado com sucesso!!")
    }
})