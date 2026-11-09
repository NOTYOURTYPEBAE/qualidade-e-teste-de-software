function verificaMaiorIdade(idade){
    if(idade>=18){
        return "MAIOR"
    }else{
        return "MENOR"
    }
}
module.exports={verificaMaiorIdade}