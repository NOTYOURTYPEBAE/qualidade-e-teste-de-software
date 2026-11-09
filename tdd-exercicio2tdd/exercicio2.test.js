const index=require("./index");
test("Deve retornar o valor '49.90' ao receber uma sigla de estado diferente de 'SP'.",()=>{
const taxaEntrega=index.taxaEntrega("PR")
expect(taxaEntrega).toEqual(49.90)
})