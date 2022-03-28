describe('Sample test', () => {
    before(function() {
        cy.visit('https://www.nearform.com/')
        cy.wait(2000)
    }) 

    it('Verify Nearform logo', () => {
        cy.get('.fusion-logo').should('be.visible')
    })
})
