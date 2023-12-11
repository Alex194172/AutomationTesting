//Attempt to retrieve data for a nonexistent resource from JSONPlaceholder API
describe('API Test nonexistent resource', () => {
    it('Handle scenario where a request is made for a nonexistent resource', () => {
        //GET request for a nonexistent resource ( user id = 1000 )
        cy.request({url: 'https://jsonplaceholder.typicode.com/users/1000', failOnStatusCode: false, })
        //Handle the response
        .then((response) => {
        //Verify the status code is 404 Not Found
        expect(response.status).to.eq(404);
        });
    });
});
