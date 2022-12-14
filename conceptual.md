### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  A JSON Web Token (JWT) is a standard for encoding data as a JSON object. The data being signed to prevent misuse. JWTs are often used in authentication and authorization processes, allowing the server to verify the identity of the client and trust the data provided by the client.

- What is the signature portion of the JWT?  What does it do?
  The signature is used to verify that the sender of the JWT is who it claims to be and to ensure that the message wasn't changed along the way.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes if JWT is intercepted attacker can see the payload which is why sensitive information must not be stored in the payload. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  a. Client sends a login request with username and password
  b. If credentials are valid, server generates JWT and sends it to client
  c. Client stores JWT as a cookie or local storage
  d. When server receives a request from the client it checks the jwt to verify and ensure it has not been tampered.

- Compare and contrast unit, integration and end-to-end tests.
  a. Unit tests verify the results of individual components of code such as function or a class.
  b. Integration tests involve multiple components of code and check the results of their integration points. 
  c. End-to-End tests test the entire system from end to end and are designed to test the system as a whole. 

  Due to the nature of their coverage all tests are important to ensure quality of code.

- What is a mock? What are some things you would mock?
  Fake object used to isolate the behaviour of component of code in unit testing. Things that can be mocked include databases, web services, and return values.

- What is continuous integration?
  It is a software development practice in which developers regularly integrate their code changes in the shared repo.

- What is an environment variable and what are they used for?
  Values available to the operating system and other programs on the computer. They are used to store configuration settings. 

- What is TDD? What are some benefits and drawbacks?
  TDD is a software development method in which tests are written before the implementation code. Benefits - Ensures implementation satisfies desired behavior, provides a suite of tests to validate correctness and quality of code. Drawback - requires more time and it can be challenging to write good tests thoroughly

- What is the value of using JSONSchema for validation?
  Allows validation of JSON documents against the schema which prevents inconsistencies in data. It also provides a standardized way to define the structure of requested JSON documents.

- What are some ways to decide which code to test?
  a. Test all code regardless of complexity and importance
  b. Test criticl or complex code
  c. Test code with high risk or impact
  d. Test code based on coverage

- What does `RETURNING` do in SQL? When would you use it?
  Return the calues of specified columns for the rows affected by ```INSERT```, ```UPDATE```, or ```DELETE``` statements.

- What are some differences between Web Sockets and HTTP?
  a. Web sockets use a persistent, full duplex connection between the server and the client. HTTP uses request-response model which is stateless
  b. In HTTP client sends a request and server sends a response. Web Sockets allow bi-directional communication between client and the server. 
  c. Web Sockets are suitable for real-time apps such as chat or gaming whereas HTTP is better suited for serving web pages and downloading files. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I did prefer Flask over Express. Flask as a lightweight framework was easier to learn and the utility of Sqlalchemy as an ORM resulted in more effecient code compared to express.
