//Test case 11: Product search and add it to favorites, check for the correct number, delete 1 from favorites, check for the correct number
describe('Emag Product Search Test', () => {
  it('Should search for a product', () => {
      //Visit the Emag website
      cy.visit('https://www.emag.ro/');
      //Handle cookie consent if it exists
      cy.wait(5000);
      cy.get('.js-accept').click();
      //Handle pop-up for sign-in
      cy.wait(5000);
      cy.get('.js-dismiss-login-notice-btn').click();
      //Click on the offer of the day
      cy.contains('Oferta Zilei').should('exist').click();
      //Click on the 3rd category
      cy.get('.cp-item').eq(2).click();
      //Add to favorites the first product
      cy.get('button.add-to-favorites').first().click();
      //Click on eMag logo to navigate to home page
      cy.get('a.navbar-brand').click();
      //Select from Products the TV, Audio-Video & Foto category
      cy.contains('TV, Audio-Video & Foto').should('exist').click();
      //Select Gaming Consoles
      cy.wait(10000);
      cy.contains('Console Gaming').should('exist').click();
      //Select the 3rd product
      cy.wait(5000);
      cy.get('.card-item.card-standard.js-product-data').eq('2').click();
      //Add to Favorites
      cy.get('button.add-to-favorites').first().click({force: true});
      //Click on Favorites 
      cy.get('i.em-heart.navbar-icon').should('be.visible').click();
      //Got Script error
      //The following error originated from your application code, not from Cypress.
      // Ignore uncaught exceptions
      Cypress.on('uncaught:exception', (err, runnable) => {
      // prevent Cypress from failing the test
      return false;
      });
      //Verify that there are 2 products
      cy.contains('2 produse').should('exist');
      //Delete the first product from the Favorites list
      cy.get('i.em-delete.gtm_9p2y1a').first().click(); 
      //Verify that there is 1 product
      cy.contains('1 produs').should('exist');
  });
});