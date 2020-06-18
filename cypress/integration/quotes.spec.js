//group several tests that are related together 
describe('Inputs and cancel button', () => {

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

    it('cancel button should clear form and disable submit button', () => {
        cy.get('button#cancelBtn')
            .click()
        //assertions
        cy.get('input[name=text]').should('be.empty')
        cy.get('input[name=author]').should('be.empty')
        cy.get('button#submitBtn').should('be.disabled')
    })
})

describe('Create new quote', () => {
    it('can navigate to the site', () => {
        //remote control operation
        cy.visit('http://localhost:1234')
    })

    it('can type a quote and an author for a new quote', () => {
        cy
            .get('input[name=text')
            .type('A quote')
        cy
            .get('input[name=author]')
            .type('An author')
    })

    it('Click button and have quote on screen', () => {
        cy
            .get('button#submitBtn')
            .should('be.enabled')
            .click()
            .should('be.disabled')
        cy  
            .get('input[name=text]')
            .should('be.empty')
        cy
            .get('input[name=author]')
            .should('be.empty')
        // cy
        //     .get(' ul > :last-child() > div')
        //     .should('contain', 'A quote')
        cy.contains('A quote')
    })

    it('can delete newly created quote', () => {
        cy
            .contains('A quote')
            .siblings('button:nth-of-type(2)')
            .click()
        //asserts that quote is removed
        cy.contains('A quote').should('not.exist')
    })
})