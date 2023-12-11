// Test case 3: This test scenario is for testing the title of the web page
describe('Verify the title of the page', () => {
    it('verifiy title positive', () => {
        //Visit the page www.emag.ro  
        cy.visit("https://emag.ro/")
        //Verify the title is the same with eMag.ro - Căutarea nu se oprește niciodată 
        cy.title().should('eq','eMAG.ro - Căutarea nu se oprește niciodată')
    })
})
