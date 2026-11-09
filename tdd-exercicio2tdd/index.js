function taxaEntrega(estado){
const taxa=49.90
if(estado.toUpperCase()!="SP"){
    return taxa
}
else{
    return 0
}
}
module.exports={taxaEntrega}