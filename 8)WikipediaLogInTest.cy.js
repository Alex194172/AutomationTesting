describe('Wikipedia Log In Test', () => {
    it('Visit page and log in ', () => {
      //Visit Wikipedia web page 
      cy.visit('https://ro.wikipedia.org/wiki/Pagina_principal%C4%83');
      //Click on the log in button
      cy.get('#pt-login-2').click();
      //Write the username and password 
      cy.get('#wpName1').click().type('Cypresst567');
      cy.get('#wpPassword1').click().type('Cypresstest567!');
      cy.get('#wpLoginAttempt').click();
    });
});