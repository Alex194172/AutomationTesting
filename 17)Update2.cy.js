describe('Shopping Cart Flow', () => {
    it('should add a product to the cart', () => {
      // Visit the website or the specific page
      cy.visit('https://www.temu.com/');
  
      // Click on the "Best Sellers" link
      cy.get('div._1ATqdSop a._3VEjS46S').click();
  
      // Click on the first product after clicking on "Best Sellers"
      cy.get('div._3GizL2ou').eq(0).click();
      const title = cy.get('div._1Zf27vaY div._2rn4tqXP').invoke('text');
      
      // Log the title of the product
      cy.get('div._1Zf27vaY div._2rn4tqXP').invoke('text').then((text) => {
      console.log('Product Title:', text); });
      
      // Check if there are any color options
      cy.get('div._3mjWr5DX div.wfndu2Un[role="button"]').each(($colorOption) => {
        const colorName = $colorOption.find('div.F_dmbyoQ').text();
        cy.log(`Found color option: ${colorName}`);
        
        // Click on the first one 
        cy.get('div._3mjWr5DX div.wfndu2Un[role="button"]').eq(0).click();
        
        // Click on the first measurement
        cy.get('div._4kzxjBkE div._2ZDZJTUw').eq(0).find('div._1MPgBknU').click();
        
        // Click on the element to trigger the dropdown
        cy.get('div._1gfWfVq2').click();
        
        // Select the option with the value "4" from the dropdown
        cy.get('div._1IgfULWe[data-val="4"]').click();
        
        // Click on the "Add to cart" button
        cy.get('div.lfGcgrCq div._3fKiu5wx[role="button"]').click();
        
        // Remove pop up message 
        cy.get('div._2mdvMidB').click();

        // Remove second pop up message 
        cy.get('div._2mdvMidB').click();
    });
  


        // Verify if the title in the checkout matches the expected title
        cy.get('div._3WaI2u7R a._3VEjS46S').invoke('text').then((actualTitle) => {
        expect(actualTitle).to.equal(text);

    });
  });
});