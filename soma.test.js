
//import soma from "./soma.js";

const soma = require("./soma")

describe("Testes de soma", () => {
test("Deve verificar o resultado de uma soma", () => {
    expect(soma(3,8)).toBe(11)
    })
test("Deve verificar o resultado incorreto de uma soma", () => {
    expect(soma(3,8)).not.toBe(12)
    })
  
})
