//Test case 6: This test scenario is for testing the login (Blocked by Captcha)
describe('eMag website log-in', () => {
it('should log in, skip phone number', () => {
//Visit eMag webiste  
cy.visit("https://emag.ro/")
//Click on the login button
cy.get('i.em.em-user2.navbar-icon').click();
//Check for the user_login and type email and click to continue
//cy.get('#user_login_email').should('exist');
cy.get('#user_login_email', { timeout: 0}).type('cypresst567@gmail.com').get('#user_login_continue').click();
//Type for the password, type it and continue 
cy.get('#user_login_password').should('exist');
cy.get('#user_login_password').type('Cypresstest567!').get('#user_login_continue').click();
//Skip the request for phone number to be added to the account
cy.get('a.text-center.font-weight-semibold').should('exist');
cy.get('a.text-center.font-weight-semibold').click();
});
});
