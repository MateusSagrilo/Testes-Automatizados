import multiplicacao from "./multiplicacao";

describe("Testes de multiplicação", () => {
    test("Deve verificar o resultado de uma multiplicação", () => {
        expect(multiplicacao(3.2,8)).toBeCloseTo(25.6)

    })

    test("Deve verificar o resultado incorreto de uma multiplicação", () => {
        expect(multiplicacao(3,9)).not.toBe(10)
    })
})