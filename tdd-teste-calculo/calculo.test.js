const index=require('./index.js');
test("Deve retornar o valor 10 ao somar 5+5", ()=>{
    let resultado=index.soma(5,5);
    expect(resultado).toEqual(10);
})