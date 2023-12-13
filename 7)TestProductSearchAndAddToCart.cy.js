//Test case 7: Product search and add it to cart and verify the cart has the correct number of products
describe('Emag Product Search Test, Add to Cart, Check for the correct number of products in the cart', () => {
    it('Should search for a product', () => {
        //Visit the Emag website
        cy.visit('https://www.emag.ro/');
        //Handle cookie consent if it exists
        cy.wait(5000);
        cy.get('.js-accept').click();
        //Handle pop-up for sign-in
        cy.wait(5000);
        cy.get('.js-dismiss-login-notice-btn').click();
        //Search for Samsung S23 Smartphone
        cy.get('.searchbox-main').type('Samsung S23').type('{enter}');
        //Click on the first search result 
        cy.get('.card-item.card-standard.js-product-data').first().click(); 
        // Check if the cart icon exists
        cy.get('.em-cart_fill').should('exist');
        // Click the "Adauga in Cos" (Add to Cart) button
        cy.wait(5000);
        cy.get('.btn-product-atc .btn-emag').click({ force: true});
        //Click to see the details of the products in the basket
        cy.wait(5000);
        cy.contains('Vezi detalii cos').should('exist').click();
        //Click on eMag logo to navigate to home page
        cy.get('a.navbar-brand').click();
        //Verify that the cart has 1 item
        cy.get('span.jewel,jewel-danger').should('have.text', '1');
        //Search for Samsung TV 
        cy.get('.searchbox-main').type('Samsung TV').type('{enter}');
        //Click on the first search result 
        cy.get('.card-item.card-standard.js-product-data').first().click(); 
        // Click the "Adauga in Cos" (Add to Cart) button
        cy.wait(5000);
        cy.get('.btn-product-atc .btn-emag').click({ force: true}); 
        //Click to see the details of the products in the basket
        cy.wait(5000);
        cy.contains('Vezi detalii cos').should('exist').click();
        //Click on eMag logo to navigate to home page
        cy.get('a.navbar-brand').click();
        //Verify that the cart has 2 items
        cy.get('span.jewel,jewel-danger').should('have.text', '2');    
    });
});

