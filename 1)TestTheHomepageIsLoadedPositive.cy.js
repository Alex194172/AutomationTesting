//Test case 1: Visit Emag Homepage
describe('Emag Homepage Test', () => {
    it('Should Visit the homepage', () => {
        //Visit the Emag website
        cy.visit('https://www.emag.ro/');

        //Assert that the homepage is loaded
        cy.title().should('include', 'eMAG.ro - Căutarea nu se oprește niciodată');
        cy.url().should('include', 'www.emag.ro');
    });
});