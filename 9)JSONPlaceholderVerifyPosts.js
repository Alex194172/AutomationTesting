//Use the JSONPlaceholder API (https://jsonplaceholder.typicode.com/) 
//Retrieve a list of posts, verify status code, verify response body, verify first post has the expected strucure

describe('API Test1', () => {
    it('should retrieve and verify data from the JSONPlaceholder API', () => {
        //Make a GET request to retrieve a list of posts
        cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
        //Verify the status code is 200 
        expect(response.status).to.eq(200);
        //Verify the response body is not empty
        expect(response.body).to.not.be.empty;
        //Verify the response body is an array
        expect(response.body).to.be.an('array');
        //Verify the first post has the expected structure 
        expect(response.body[0]).to.have.property('userId');
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.property('title');
        expect(response.body[0]).to.have.property('body');
    });
    });
});
