1. GET users/[username]
    Bug: Returns an empty object if user not found
    Resolution: 
    a. Add an if statement that checks if the user is an empty object.
    b. If user is an empty object throws Not Found Error. 

2. POST auth/register
    Bug: Does not accept user.admin key from the json body.
    Resolution: 
    a. Add an admin argument with a default value of false in the register method of the model.
    b. Add admin column in the insert sql statement within the register method of the model.
    c. Pass req.body as an argument to the User.register method of the register route. 

3. POST auth/login
    Bug: route returns token regardless of whether password is correct or incorrect
    Resolution:
    a. ```await``` keyword is missing in login route. Add await keyword to ensure promise is resolved before token is created.
    b. Refactor authenticate method in models to throw error if password is incorrect or user does not exist

4. Middleware /auth
    Bug: Existing code returns payload with a tampered token. 
    Resolution:
    a. Replace ```jwt.decode``` method with ```jwt.verify```. Verify method verifies token signature whereas decode method does not verify signature. It merely returns the payload. 

5. PATCH users/[username]
    Bug: Only admin users are allowed to update user data
    Resolution: 
    a. Add ensureAdminOrUser function to authorization middleware
    b. change middleware in patch route to ensureAdminOrUser

6. PATCH users/[username]
    Bug: route accepts username and password fields for update.
    Resolution: Add if statement in route to throw error if above fields provided.