describe('Emag Product Search Test with shortcuts', () => {
    it('Should search for a product', () => {
      
      // Visit Emag with a parameterized URL
      cy.visitSite('https://www.emag.ro/');
      
      // Click on Oferta zilei 
      cy.ClickOfertaZilei();
  
      // Click on Products
      cy.get('a.navbar-brand').click();
            
      // Select from Products the TV, Audio-Video & Foto category
      cy.contains('TV, Audio-Video & Foto').should('exist').click();
            
      // Select Gaming Consoles
      cy.contains('Console Gaming').should('exist').click();
      cy.wait(10000);
  
      // Extract and parse the product price
      cy.get('.product-new-price').invoke('text').then((priceText) => {
          const numericPrice = parseFloat(priceText.replace(/[^\d.,]/g, '').replace(',', '.'));
    
          // Check if the price is below 3000
          if (numericPrice < 3000) {
            // Click on "Adauga in Cos" if the price is below 3000
            cy.get('.btn-emag.yeahIWantThisProduct').first().click();
            // Get the product name
            cy.get('.cart-product .product-title').invoke('text').then((productName) => {
            cy.log(`Product added to cart: ${productName}`);
            });
            // Click on the X button to close the popup
            cy.get('.close.gtm_6046yfqs').click(); 
            // Click again on Adauga in cos 
            cy.get('.btn-product-atc .btn-emag').click({ force: true});
            // Click on the X button to close the popup
            cy.get('.close.gtm_6046yfqs').click(); 
            // Click again on Adauga in cos 
            cy.get('.btn-product-atc .btn-emag').click({ force: true});
            // Verify that the quantity is 4
            cy.get('span.qty-value').should('have.text', '4');
          } else {
            cy.log('Product price is not below 3000.');
          }
      });
    });
  });
  