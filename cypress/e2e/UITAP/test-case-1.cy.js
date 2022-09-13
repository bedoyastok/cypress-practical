const url = 'http://uitestingplayground.com';

describe('Visit UITAP', () => {

    beforeEach(() => {
        cy.visit({url});
    });

    it('Validation title', () => {
        cy.get('#title').should('have.text','UI Test AutomationPlayground');
    });

    it('Resources validation', () => {
        cy.get('[href="/resources"]').click();
        cy.url().should('eq',`${url}/resources`);
        cy.get('h3').should('have.text','Resources');
        cy.back('-1')
    });
    
});