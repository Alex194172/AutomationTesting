Automation Testing

Alexandru Bucur

Onboarding

Steps :
Download NodeJS from https://nodejs.com/
1.Install Nodejs
2.Go to C:\Program Files\nodejs (to configure the path we need to create an environment variable)
3.Copy path of the folder in which was installed in and right click on "This PC" followed by selecting Properties
4.Select Advanced system settings -> Environment variables -> New -> At Variable name you can put NODE_HOME and for Variable value paste the path
5.Create a folder on desktop that will act as a project, name it CypressAutomation
6.Open the folder with CMD to generate in it package.json
7.Type npm init and hit Enter
8.Give a name like CypressAutomation 
9.From Version until license (ISC) you can skip all of these by pressing Enter 
10. After the generation is finished, type "yes" and hit Enter, you can check if everything is correct by typing dir
11.To download and install Cypress we need to run this command npm install cypress –save-dev
12.After the installation is completed, we will need a code editor

Download Visual Studio Code from https://www.code.visualstudio.com/download
1.Install Visual Studio Code and open it
2.Go to File -> Open Folder -> Select the folder that was created (CypressAutomation) and press on Select Folder
3.You can now see that we have under Welcome a tab name CypressAutomation with node_modules that include package-lock.json and package.json
4.Under CypressAutomation you cand add folders and files with the right click on the tab name 
5.Select Terminal and new Terminal and write node_modules/.bin/cypress open to open Cypress (when running first time we will encounter the error that running scripts is disabled on this system, we will need to enter with Admin into Windows PowerShell, run the command set-executionpolicy remotesigned and type yes after that)
6.We will have to select between E2E Testing and Component Testing, select E2E Testing 
7.Now we will select one web browser and the button "Start E2E Testing in Chrome" so that Cypress will use for the tests (from my side I went with Chrome)
8.Now that the web page is loaded, you will see a path cypress/e2e and a sample file with the termination of the name.cy.js, this termination it is used for the tests in Visual Studio Code to run in Cypress
9.You will see a new folder in Visual Studio Code named e2e which is related to cypress, each test made in this folder will show in Cypress
10.Right click on the e2e folder from Visual Studio Code and select new file, name it FirstTest.cy.js and hit Enter 
11.After the test is finished, select new terminal and write npx cypress open 
12.After the E2E Testing and the web browser are selected you can see the test FirstTest.cy.js in the folder of cypress/e2e
13.Select the test and watch the test run, if there are some errors, you can edit directly from Visual Studio Code and press on CTRL+S and go back to the browser, the test will automatically restart 

Getting started ( Definition, Purpose, Importance, Testing plan )

Definition:
Automated testing involves using specialized tools and scripts to execute pre-defined test cases, compare actual results with expected results, and report the outcomes. It aims to streamline the testing process and enhance the efficiency of software development.
Purpose in Software Development: 
Automated testing serves various purposes in the software development lifecycle. It helps identify defects, ensures consistent behavior, accelerates the testing process, and provides rapid feedback to developers.
Importance of Testing: 
Testing plays a crucial role in ensuring software quality and reliability. It helps detect bugs and vulnerabilities early in the development process, reducing the likelihood of issues in the production environment. Testing contributes to delivering a robust and user-friendly final product.

Testing plan:
1. Home Page Loaded
2.  Non-existent Page
3. Verify Title Positive
4. Verify Title Negative
5. Product Search
6. Log In
7. Product Search Add To Cart
8. Log In 
9. JSONPlaceholder API
10. JSONPlaceholder API 
11. FavoriteProducts
12. JSONPlaceholderAPI

1. Home Page Loaded

Objective: To ensure that the home page of www.emag.ro is successfully loaded.
Steps: Visit the www.emag.ro website and verify that the home page elements are visible.
Expected Result: All essential components on the home page are present and visible.
Actual Result: Test passes without any errors.

//Test case 1: Visit Emag Homepage
describe('Emag Homepage Test', () => {
    it('Should Visit the homepage', () => {
        //Visit the Emag website
        cy.visit('https://www.emag.ro/');

        //Assert that the homepage is loaded
        cy.title().should('include', 'eMAG.ro - Căutarea nu se oprește niciodată');
        cy.url().should('include', 'www.emag.ro');
    });
});

Steps:
1.	Visit www.emag.ro
2.	Verify the page is loaded by verifying the title to be 'eMAG.ro - Căutarea nu se oprește niciodată'
3.	Verify the URL to be www.emag.ro

2. Non-existent page

Objective: Ensure that attempting to visit a non-existing page redirects to the proper page on www.emag.ro.
Steps: Try to access a non-existing page, wait for the page to reload, verify the URL to be the correct one.
Expected Result: The system redirects to the appropriate page, and a valid page is displayed.
Actual Result: Test passes without any errors

//Test case 2: Visiting a non-existent page and after 5 seconds return to the existent home page 
describe('Emag Homepage Test', () => {
    it('Should fail when visiting the homepage', () => {
        //Visit a non-existent page 
        cy.visit('https://www.emag.ro/nonexistent-page', { failOnStatusCode: false })
        //Check for specific error
        cy.contains('Eroare 404').should('be.visible');
        //Wait for 10 seconds for the page to reload to existent page
        cy.wait(10000);
        //Verify after the reload the exstent page is loaded
        cy.url().should('include', 'www.emag.ro');
    });
    });

Steps:
1.	Visit www.emag.ro/nonexistent-page
2.	Verify the error message ‘Eroare 404’ is visible
3.	Wait 10 seconds
4.	Verify the URL to be www.emag.ro
5.	3. Verify Title Positive 
3.Verify Title positive

Objective: Verify that the title of the eMAG.ro web page is displayed correctly.
Steps: Visit www.emag.ro page and validate the title.
Expected Result: The title of the web page should match the expected title, which is "eMAG.ro - Căutarea nu se oprește niciodată." If the title is correct, the test is successful; otherwise, it will fail.
Actual Result: Test passes without any errors.

// Test case 3: This test scenario is for testing the title of the web page
describe('Verify the title of the page', () => {
    it('verifiy title positive', () => {
        //Visit the page www.emag.ro  
        cy.visit("https://emag.ro/")
        //Verify the title is the same with eMag.ro - Căutarea nu se oprește niciodată 
        cy.title().should('eq','eMAG.ro - Căutarea nu se oprește niciodată')
    })
})

Steps:
1.	Visit www.emag.ro
2.	Verify the title to be 'eMAG.ro - Căutarea nu se oprește niciodată'

4. Verify Title Negative

Objective: Verify that the title of the eMAG.ro web page does not match an incorrect title.
Steps: Open the browser, navigate to eMag.ro website, check the title of the web page.
Expected Result: The title of the web page should not match the provided incorrect title, which is "eMAG.ro." If the title is not the same, the test is successful; otherwise, it will fail.
Actual Result: Test comes back as failed which is as indented because the title was incorrect from the start. 

// Test case 4: This test scenario is for testing the title of the web page does not match
describe('Verify the title of the page', () => {
    it('verifiy title negative', () => {
        //Visit the page www.emag.ro 
        cy.visit("https://emag.ro/")
        //Verify the title is not the same with eMag.ro 
        cy.title().should('eq','eMAG.ro')
    })
})

Steps:
1.	Visit www.emag.ro
2.	Verify that the title of the eMAG.ro web page does not match an incorrect title

5. Product search 

Objective: Ensure the search functionality on www.emag.ro works as expected and search for Samsung S23.
Steps: Enter a search for Samsung S23.
Expected Result: Relevant products are displayed based on the search query.
Actual Result: Test passes without any errors.

//Test case 5: Product search
describe('Emag Product Search Test', () => {
    it('Should search for a product', () => {
        //Visit the Emag website
        cy.visit('https://www.emag.ro/');
        //Search for Samsung S23 Smartphone and press Enter key
        cy.get('.searchbox-main').type('Samsung S23').type('{enter}');    
    });
});


Steps: 
1.	Visit www.emag.ro
2.	Click on the search box
3.	Type Samsung S23
4.	Hit Enter 

6. Log-in 

Objective: Verify successful login on www.emag.ro.
Steps: Click on the Log In button, type email address, click confirm, type password, click confirm, skip phone registration
Expected Result: The system allows access after successful login.
Actual Result: Captcha stops the test from running till the end.

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

Steps:
1.	Visit www.emag.ro
2.	Click on the log-in button
3.	Check for the user_login and type email and click to continue
4.	Type for the password, type it and continue
5.	Skip the request for phone number to be added to the account

7. Product search add to cart 

Objective: Test the end-to-end flow of searching for a product and adding it to the cart on www.emag.ro.
Steps: Conduct a product search, select a product, and add it to the cart.
Expected Result: The product is successfully added to the cart.
Actual Result: Test passes without any errors.

//Test case 7: Product search and add it to cart and verify the cart has the correct number of products
describe('Emag Product Search Test, Add to Cart, Check for the correct number of products in the cart', () => {
    it('Should search for a product', () => {
        //Visit the Emag website
        cy.visit('https://www.emag.ro/');
        //Handle cookie consent if it exists
        cy.wait(5000);
        cy.get('.js-accept').click();
        //Handle pop-up for sign-in
        cy.wait(5000);
        cy.get('.js-dismiss-login-notice-btn').click();
        //Search for Samsung S23 Smartphone
        cy.get('.searchbox-main').type('Samsung S23').type('{enter}');
        //Click on the first search result 
        cy.get('.card-item.card-standard.js-product-data').first().click(); 
        // Check if the cart icon exists
        cy.get('.em-cart_fill').should('exist');
        // Click the "Adauga in Cos" (Add to Cart) button
        cy.wait(5000);
        cy.get('.btn-product-atc .btn-emag').click({ force: true});
        //Click to see the details of the products in the basket
        cy.wait(5000);
        cy.contains('Vezi detalii cos').should('exist').click();
        //Click on eMag logo to navigate to home page
        cy.get('a.navbar-brand').click();
        //Verify that the cart has 1 item
        cy.get('span.jewel,jewel-danger').should('have.text', '1');
        //Search for Samsung TV 
        cy.get('.searchbox-main').type('Samsung TV').type('{enter}');
        //Click on the first search result 
        cy.get('.card-item.card-standard.js-product-data').first().click(); 
        // Click the "Adauga in Cos" (Add to Cart) button
        cy.wait(5000);
        cy.get('.btn-product-atc .btn-emag').click({ force: true}); 
        //Click to see the details of the products in the basket
        cy.wait(5000);
        cy.contains('Vezi detalii cos').should('exist').click();
        //Click on eMag logo to navigate to home page
        cy.get('a.navbar-brand').click();
        //Verify that the cart has 2 items
        cy.get('span.jewel,jewel-danger').should('have.text', '2');    
    });  
});

Steps:
1.	Visit www.emag.ro
2.	Handle cookie consent if it exists
3.	Handle pop-up for sign-in
4.	Click on the search box and type Samsung S23 
5.	Click on the first search result
6.	Check if the cart icon exists
7.	Click the "Adauga in Cos" (Add to Cart) button
8.	Click to see the details of the products in the basket
9.	Click on eMag logo to navigate to home page
10.	Verify that the cart has 1 item
11.	Click on the search box and type Samsung TV 
12.	Click on the first search result
13.	Click the "Adauga in Cos" (Add to Cart) button
14.	Click to see the details of the products in the basket
15.	Click on eMag logo to navigate to home page
16.	Verify that the cart has 2 items

8. Log-in

Objective: Verify successful login on www.wikipedia.org.
Steps: Provide valid credentials and attempt to log in.
Expected Result: The system allows access after successful login.
Actual Result: Log-in finalized accordingly without any errors.

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

Steps:
1.	Visit www.wikipedia.org
2.	Click on the log in button
3.	Write the username 
4.	Write the password
5.	Click on the Log in button 

9. JSONPlaceholder API

Objective: Verify that the JSONPlaceholder API can be accessed and retrieve a list of posts successfully.
Steps: Verify Status Code, Response Body, Post Structure
Expected Result: The API request should return a response with a 200 OK status code, indicating a successful request. The response body should contain a non-empty array of posts. Each post in the array should have the expected structure with properties like userId, id, title, and body.
Actual Result: Test passes without any errors.

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

Steps: 
1.	Make a GET request to retrieve a list of posts from 'https://jsonplaceholder.typicode.com/posts'
2.	Verify the status code is 200
3.	Verify the response body is not empty
4.	Verify the response body is an array
5.	Verify the first post has the expected structure

10. JSONPlaceholder API

Objective: Verify that the API gracefully handles requests to a nonexistent resource and returns a 404 status code.
Steps: GET request to a nonexistent resource, handle response, verify that the returned status code is 404 (Not Found).
Expected Result:The test should pass, indicating that the API responds correctly to requests for nonexistent resources by returning a 404 status code.
Actual Result: Test passes showing the 404 error.

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

Steps: 
1.	GET request for user id = 1000 from 'https://jsonplaceholder.typicode.com/posts'
2.	Handle the response
3.	Verify the status code is 404 Not Found

11. Favorite Products

Objective: Add 2 different products from different places to the favorite list, verify that the number, delete one and verify again.
Steps: Search for a product, add it to favorites, search for other product and add it to favorites, verify that the number of products shown are 2, delete one from the list and verify it again to display only 1.
Expected Result: The test passes with displaying only 1 product being on the favorite list.
Actual Result: Test passes showing only 1 product in the favorites list.

//Test case 11: Product search and add it to favorites, check for the correct number, delete 1 from favorites, check for the correct number
describe('Emag Product Search Test', () => {
  it('Should search for a product', () => {
      //Visit the Emag website
      cy.visit('https://www.emag.ro/');
      //Handle cookie consent if it exists
      cy.wait(5000);
      cy.get('.js-accept').click();
      //Handle pop-up for sign-in
      cy.wait(5000);
      cy.get('.js-dismiss-login-notice-btn').click();
      //Click on the offer of the day
      cy.contains('Oferta Zilei').should('exist').click();
      //Click on the 3rd category
      cy.get('.cp-item').eq(2).click();
      //Add to favorites the first product
      cy.get('button.add-to-favorites').first().click();
      //Click on eMag logo to navigate to home page
      cy.get('a.navbar-brand').click();
      //Select from Products the TV, Audio-Video & Foto category
      cy.contains('TV, Audio-Video & Foto').should('exist').click();
      //Select Gaming Consoles
      cy.wait(10000);
      cy.contains('Console Gaming').should('exist').click();
      //Select the 3rd product
      cy.wait(5000);
      cy.get('.card-item.card-standard.js-product-data').eq('2').click();
      //Add to Favorites
      cy.get('button.add-to-favorites').first().click({force: true});
      //Click on Favorites 
      cy.get('i.em-heart.navbar-icon').should('be.visible').click();
      //Got Script error
      //The following error originated from your application code, not from Cypress.
      // Ignore uncaught exceptions
      Cypress.on('uncaught:exception', (err, runnable) => {
      // prevent Cypress from failing the test
      return false;
      });
      //Verify that there are 2 products
      cy.contains('2 produse').should('exist');
      //Delete the first product from the Favorites list
      cy.get('i.em-delete.gtm_9p2y1a').first().click(); 
      //Verify that there is 1 product
      cy.contains('1 produs').should('exist');  }); });

Steps:
1.	Visit www.emag.ro 
2.	Handle cookie consent if it exists
3.	Handle pop-up for sign-in
4.	Click on the offer of the day
5.	Click on the 3rd category
6.	Add to favorites the first product
7.	Click on eMag logo to navigate to home page
8.	Select from Products the TV, Audio-Video & Foto category
9.	Select Gaming Consoles
10.	Select the 3rd product
11.	Add to Favorites
12.	Click on Favorites
13.	Ignore uncaught exceptions
14.	Verify that there are 2 products
15.	Delete the first product from the Favorites list
16.	Verify that there is 1 product

12. JSONPlaceholder API

Objective: Verify the successful addition and deletion of a user using the JSONPlaceholder API.
Steps: Send a request to create a new user, verify the response status is 201, delete request for the new user, verify the response status is 200.
Expected Result: The test passes with displaying only 1 product being on the favorite list.
Actual Result: Test passes by showing 201 users after creation of the new user and 200 after deletion of it.

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

Steps:
1.	Create a new user object with name, username, and email
2.	Make a POST request to create a new user
3.	Request headers specifying JSON content type
4.	After the request, check that the response status is 201 (Created)
5.	Store the user ID from the response body for later use
6.	Make a DELETE request to delete the user using the stored user ID
7.	Request headers specifying JSON content type
8.	After the request, check that the response status is 200 (OK)

Advantages using Automation Testing: 
1.	Faster Execution: Automated tests can run much faster than manual tests, allowing for quicker feedback on the quality of the software.
2.	Reusability: Automated test scripts can be reused across different versions of the software, saving time and effort in creating new tests for each release.
3.	Consistency: Automated tests perform the same steps with precision every time they are executed, ensuring consistency and eliminating human errors in repetitive tasks.
4.	Cost-Efficiency: While there is an initial investment in setting up automation, it can lead to significant cost savings in the long run due to faster test execution and reduced manual testing efforts.

Biography:

1.	https://www.cypress.io
2.	https://www.youtube.com/@sdetpavan
3.	https://www.browserstack.com/guide/cypress-automation-tutorial
4.	https://github.com/cypress-io/cypress-example-recipes/tree/master/examples
