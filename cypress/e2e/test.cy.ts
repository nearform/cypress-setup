describe('Sample test', () => {
    before(function() {
        cy.visit('https://www.nearform.com/')
    }) 

    it('Verify Nearform logo', () => {
        cy.get('.fusion-logo').should('be.visible')
    })
})
