describe('Emag Product Search Test with shortcuts', () => {
    it('Should search for a product', () => {
    // Shortcut to visit Emag,close pop-ups and verify URL
    cy.visitEmag();

    // Click on Oferta zilei 
    cy.ClickOfertaZilei();

    // Check if there's a category for gaming consoles
    cy.get('body').then(($body) => {
        if ($body.find('a:contains("Console Gaming")').length > 0) {
        
        // Click on the gaming consoles category
        cy.contains('Console Gaming').click();
  
        // Select the 3rd product
        cy.get('.card-item.card-standard.js-product-data').eq('2').click();

        // Shortcut to add to basket 
        cy.addToBasket();
        
        // Click on the eMag logo 
        cy.get('a.navbar-brand').click();

        } else {

            // Click on the eMag logo 
            cy.get('a.navbar-brand').click();

            // Select from Products the TV, Audio-Video & Foto category
            cy.contains('TV, Audio-Video & Foto').should('exist').click();
            // Select Gaming Consoles
            cy.wait(10000);
            cy.contains('Console Gaming').should('exist').click();

            // Select the 3rd product
            cy.wait(5000);
            cy.get('.card-item.card-standard.js-product-data').eq('2').click()

            // Shortcut to add to favorites
            cy.addToBasket();

            // Click on the eMag Logo
            cy.get('a.navbar-brand').click();

        };
        });
    });
  });
