# Frontend Intern task
### Demo Version:  
https://instabug-frontend-task.netlify.app/

**●** Build a small app that consists of 3 pages (login. Welcome, 404) pages
○ It is preferred to use VUE js
○ It is preferred to use SASS/SCSS
○ It is preferred to not use any CSS framework
○ You must use GitHub, GitLab, or any other source control tools
○ You must Deploy the app on Netlify, GitHub pages, or any other tool
○ It is a plus to create the illustration on the 404 pages with SASS
○ Try to follow consistent guidelines in your code
**●** Write automation tests for the login form using cypress
○ You will need to implement 2 or more from the scenario mentioned in the
automation section
The APP requirements:
Pages & routes:

1. login page with route/login which contains the login form + slider
2. welcome screen with route /welcome which will contain a welcome message + logout
    button
3. 404 page with route /404 if u entered any route other than the above it redirects to 404
    page
login functionality:
It should be local u should have the following array with objects in your code
[
{ email: ‘mohamed@instabug.com’, password: ‘A12345678’ },
{ email: ‘mohamed1@instabug.com’, password: ‘A12345678’ },
{ email: ‘mohamed2@instabug.com’, password: ‘A12345678’ },
{ email: ‘mohamed3@instabug.com’, password: ‘A12345678’ },
{ email: ‘mohamed4@instabug.com’, password: ‘A12345678’ },
{ email: ‘mohamed5@instabug.com’, password: ‘A12345678’ },
{ email: ‘mohamed6@instabug.com’, password: ‘A12345678’ },
{ email: ‘mohamed7@instabug.com’, password: ‘A12345678’ },
]
If the entered username and password match any of the above the user should be redirected to
the welcome page
Redirect rules:
In case the user didn’t log in or he logged out he can’t access the welcome page if he opened it
via URL he will be redirected to the login


In case the user logged once if he opened the login page via the URL it will redirect to the
welcome page, Till the user logged out from the welcome page
The above 2 cases are applied on refresh, open in a new tab, closed the tab and opened it
again, closed the browser opened it again
login page:

- should match the following design which contains
    - social login buttons, forgot password, signup and, log in via SSO links will be
       implemented without functionality
    - The login form will be implemented with the functionality mentioned in the login
       functionality section
    - The left side of the page contains a slider having 3 slides and the slider should
       switch between slides automatically
- For the right side assets, u could check Instabug login page
Login page + the first carousel slide


The slider first image https://svgshare.com/i/hrA.svg
Login page + the 2nd carousel slide


The slider 2nd image: https://svgshare.com/i/hrB.svg
Login page + the 3rd carousel slide
The slider 3rd image: https://svgshare.com/i/hrV.svg
Login form validations:


The login form consists of 2 fields and one button:
User email, password, login password

- The login button is disabled till there are valid values in the other fields
- The email has email validation with text
- The password must be more than 6 characters otherwise shows (password must be six
    characters or more)
- The password must contain at least 1 uppercase letters and one number and shouldn’t
    contain the email address name (the part that came before the @)
- If the email or password is incorrect it shows (Your email and/or your password are
    incorrect)


Welcome Page:
It should have:

- welcome text “Welcome to {the logged-in user email}
- logout button which has logged-out functionality mentioned in the redirect rules section
404 page:
It shows when the user entered any URL other than the login and welcome URLs
It shows this illustration:
IT IS A PLUS TO CREATE THE ILLUSTRATION USING CSS ONLY


The illustration image:
Login form automation using cypress:

- Visit https://www.cypress.io/ and install cypress
- Read how to start using it
- Try to automate 2 or more of the following scenarios for the login form
- Scenario 1
    a. Enter an email address that doesn’t exist in the login list
    b. Enter any password
    c. Click on the login button
    d. Validate that the error message ‘you email and/or password are incorrect’ shows
- Scenario 2:


```
a. Enter an email address that exists in the login list
b. Enter any wrong password
c. Click on the login button
d. Validate that the error message ‘you email and/or password are incorrect’ shows
```
- Scenario 3:
    a. Enter an email address that exists in the login list
    b. Enter the right password
    c. Click on login button
    d. Validate that the browser will redirect to the welcome page
- Scenario 4:
    a. Enter not a valid email address ‘dddd’
    b. Un-focus the textbox
    c. Validate that the red validation message will appear
    d. Validate that the textbox border will be red




## Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
