
//import soma from "./soma.js";

import subtracao from "./subtracao"

describe("Testes de subtracao", () => {
test("Deve verificar o resultado de uma subtracao", () => {
    expect(subtracao(6.7,2.5)).toBe(4.2)
    expect(subtracao(6,8)).toBe(-2)
    expect(subtracao(60,2)).toBe(58)
    })
test("Deve verificar o resultado incorreto de uma subtracao", () => {
    expect(subtracao(6,2)).not.toBeCloseTo(5)
    })
  
})
