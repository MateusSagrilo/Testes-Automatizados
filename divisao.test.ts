import divisao from "./divisao";

describe("Testes de divisão", () => {
    test("Deve verificar o resultado de uma divisão", () => {
        expect(divisao(8,8)).toBeCloseTo(1)

    })

    test("Deve verificar o resultado incorreto de uma divisão", () => {
        expect(divisao(3,9)).not.toBeCloseTo(0.3)
    })
})