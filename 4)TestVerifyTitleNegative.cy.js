// Test case 4: This test scenario is for testing the title of the web page does not match
describe('Verify the title of the page', () => {
    it('verifiy title negative', () => {
        //Visit the page www.emag.ro 
        cy.visit("https://emag.ro/")
        //Verify the title is not the same with eMag.ro 
        cy.title().should('eq','eMAG.ro')
    })
})