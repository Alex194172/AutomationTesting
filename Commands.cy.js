Cypress.Commands.add('visitSite', (url) => {
    cy.visit(url);
  });

Cypress.Commands.add('addToBasket', () => {
    // Check if the cart icon exists
    cy.get('.em-cart_fill').should('exist');
  
    // Click the "Adauga in Cos" (Add to Cart) button
    cy.wait(5000);
    cy.get('.btn-product-atc .btn-emag').click({ force: true });
  
    // Click to see the details of the products in the basket
    cy.wait(5000);
    cy.contains('Vezi detalii cos').should('exist').click();
  });

Cypress.Commands.add('addToFavorites', () => {
    // Add to Favorites
    cy.get('button.add-to-favorites').first().click({ force: true });
  
    // Click on Favorites 
    cy.get('i.em-heart.navbar-icon').should('be.visible').click();
  
    // Ignore uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      // prevent Cypress from failing the test
      return false;
    });
  });
  
Cypress.Commands.add('ClickOfertaZilei', () => {
    // Click on Oferta zilei 
    cy.contains('Oferta Zilei').should('exist').click({ force: true });
});
