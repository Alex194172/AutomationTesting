describe('Emag Product Search Test with shortcuts', () => {
    it('Should search for a product', () => {
    
    // Shortcut to visit Emag,close pop-ups and verify URL
    cy.visitEmag();
    
    // Click on Oferta zilei 
    cy.ClickOfertaZilei();

    //Click on Products
    cy.get('a.navbar-brand').click();
          
    //Select from Products the TV, Audio-Video & Foto category
    cy.contains('TV, Audio-Video & Foto').should('exist').click();
          
    //Select Gaming Consoles
    cy.contains('Console Gaming').should('exist').click();
    cy.wait(10000);

    // Extract and parse the product price
    cy.get('.product-new-price').invoke('text').then((priceText) => {
        const numericPrice = parseFloat(priceText.replace(/[^\d.,]/g, '').replace(',', '.'));
  
        // Check if the price is below 3000
        if (numericPrice < 3000) {
          // Click on "Adauga in Cos" if the price is below 3000
          cy.get('.btn-emag.yeahIWantThisProduct').first().click();
          // Click on the cart link
          cy.get('#my_cart').click();

        } else {
          cy.log('Product price is not below 3000.');
        }

    });
    });
});