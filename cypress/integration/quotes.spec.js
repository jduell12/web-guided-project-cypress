//group several tests that are related together 
describe('Inputs and submit button', () => {

    //single test 
    it('can navigate to the site', () => {
        //remote control operation
        cy.visit('http://localhost:1234')

        //assertion 
        cy.url().should('include', 'localhost')
    })

    it('submit button should be disabled', () => {
        cy.get('button#submitBtn').should('be.disabled')
    })

    it('can type a text for a new quote', () => {
        cy.get('input[name=text]')
            .type('A new quote')
            .should('have.value', 'A new quote')
    })

    it('submit button still should be disabled', () => {
        cy.get('button#submitBtn').should('be.disabled')
    })

    it('can type an author for a new quote', () => {
        cy
            .get('input[name=author]')
            .type('An author')
            .should('have.value', 'An author')
    })

    it('submit button should be enabled', () => {
        cy.get('button#submitBtn').should('not.be.disabled')
        cy.get('button#submitBtn').should('be.enabled')
    })
})