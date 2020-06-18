//group several tests that are related together 
describe('Inputs and submit button', () => {
    //single test 
    it('can navigate to the site', () => {
        //remote control operation
        cy.visit('http://localhost:1234')

        //assertion 
        cy.url().should('include', 'localhost')
    })
})