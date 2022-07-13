describe('Sample test', () => {
    before(function() {
        cy.visit('https://www.nearform.com/')
    }) 

    it('Verify Nearform logo', () => {
        cy.get('body').should('be.visible')
    })
})
