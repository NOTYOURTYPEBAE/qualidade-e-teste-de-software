const index=require("./index")
test("Deve retornar 'MAIOR' ao receber um valor >= 18.", () => {
    const idade=index.verificaMaiorIdade(18)
    expect(idade).toBe("MAIOR")
})