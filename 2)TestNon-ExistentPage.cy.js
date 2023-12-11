//Test case 2: Visiting a non-existent page and after 5 seconds return to the existent home page 
describe('Emag Homepage Test', () => {
    it('Should fail when visiting the homepage', () => {
        //Visit a non-existent page 
        cy.visit('https://www.emag.ro/nonexistent-page', { failOnStatusCode: false })
        //Check for specific error
        cy.contains('Eroare 404').should('be.visible');
        //Wait for 10 seconds for the page to reload to existent page
        cy.wait(10000);
        //Verify after the reload the exstent page is loaded
        cy.url().should('include', 'www.emag.ro');
    });
    });
 
