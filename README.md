# Frontend Intern task
## Demo Version:  
https://instabug-frontend-task.netlify.app/

## Used Technologies:
* Vuejs
* SCSS
*  VeeValidate Form Validation
*  Vue Router
## Build a small app that consists of 3 pages (login. Welcome, 404) pages
* It is preferred to use VUE js
* It is preferred to use SASS/SCSS
* It is preferred to not use any CSS framework
* You must use GitHub, GitLab, or any other source control tools
* You must Deploy the app on Netlify, GitHub pages, or any other tool
* It is a plus to create the illustration on the 404 pages with SASS
*Try to follow consistent guidelines in your code

## The APP requirements:
### Pages & routes:
* login page with route/login which contains the login form + slider
* welcome screen with route /welcome which will contain a welcome message + logout
    button
* 404 page with route /404 if u entered any route other than the above it redirects to 404 page
### login functionality:
* It should be local u should have the following array with objects in your code
```
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
```
If the entered username and password match any of the above the user should be redirected to
the welcome page
### Redirect rules:
* In case the user didn’t log in or he logged out he can’t access the welcome page if he opened it
via URL he will be redirected to the login


* In case the user logged once if he opened the login page via the URL it will redirect to the
welcome page, Till the user logged out from the welcome page
The above 2 cases are applied on refresh, open in a new tab, closed the tab and opened it
again, closed the browser opened it again

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
