//Test case 12: Add user, verify it to be 201, delete user, verify it to be 200
describe('Add user, verify number API Test', () => {
    // Variable to store the user ID created during the test setup
    let userId;
    before(() => {
      // Create a new user object with name, username, and email
      const newUser = {
        name: 'Sam Smith',
        username: 'samsmith',
        email: 'samsmith@example.com',
      }; 
      // Make a POST request to create a new user
      cy.request({
        method: 'POST',  
        url: 'https://jsonplaceholder.typicode.com/users', 
        body: newUser, 
        // Request headers specifying JSON content type
        headers: { 'Content-Type': 'application/json' }, 
      }).then((response) => {
        // After the request, check that the response status is 201 (Created)
        expect(response.status).to.eq(201);
        // Store the user ID from the response body for later use
        userId = response.body.id;
      });
    });
  
    //Delete the user
    it('should delete a user, verify number', () => {
      // Make a DELETE request to delete the user using the stored user ID
      cy.request({
        method: 'DELETE', 
        url: `https://jsonplaceholder.typicode.com/users/${userId}`,
        // Request headers specifying JSON content type
        headers: { 'Content-Type': 'application/json' }, 
      }).should((response) => {
        // After the request, check that the response status is 200 (OK)
        expect(response.status).to.eq(200);
      });
    });
  });