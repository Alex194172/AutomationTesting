//Test case : Product search and add it to cart 
describe('Emag Product Search Test', () => {
    it('Should search for a product', () => {
        //Visit the Emag website
        cy.visit('https://www.emag.ro/');
        //Search for Samsung S23 Smartphone
        cy.get('.searchbox-main').type('Samsung S23{enter}');
        //Click on the first search result 
        cy.get('card-v2-title-wrapper').click();
        cy.get('.card-item.card-standard.js-product-data').first().click();
        //Handle cookie consent pop-up
        cy.get('.js-accept').click();   
        //Click the "Add to Cart" button
        cy.get('.add-tocart-btn').click();
    });
});

