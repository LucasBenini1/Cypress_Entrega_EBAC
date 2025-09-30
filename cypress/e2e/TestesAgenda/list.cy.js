
describe("Testes para o componente de agenda", () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Teste de inclusao de contato', () => {
        cy.get("input[type='text']").type('Lucas Benini')
        cy.get("input[type='email']").type('lucasbenini.11@gmail.com')
        cy.get("input[type='tel']").type('11999999999')
        cy.get('.adicionar').click()
        cy.contains("Lucas Benini").should("exist");
    })

    it("testando edicao de contatos", () => {
        cy.get('.edit').click()
        cy.get("input[type='text']").clear().type("Francisco");
        cy.get("input[type='email']").clear().type("francisco.11@gmail.com");
        cy.get("input[type='tel']").clear().type("11999999999");
        cy.contains("Francisco").should("exist");
    })

    it("deletando um contato", () => {
        cy.get('.delete').click()
    })
})