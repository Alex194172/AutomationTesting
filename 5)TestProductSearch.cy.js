//Test case 5: Product search
describe('Emag Product Search Test', () => {
    it('Should search for a product', () => {
        //Visit the Emag website
        cy.visit('https://www.emag.ro/');
        //Search for Samsung S23 Smartphone and press Enter key
        cy.get('.searchbox-main').type('Samsung S23').type('{enter}');    
    });
});