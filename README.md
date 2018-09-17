# Tgh

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.0.

# Please Read

---------------- Captains Log: Star Date 9/17/18 -----------------------------

UPDATE: 9/17/18 - It's about 11:30pm I can't finish this all in time will continue tomorrow so it'll be ready for Tuesday

A Demo for a hospital :)

[[ Table Of Contents ]]
 - Initialization
 - Dependecies

/********************************/
		Initialization	
/********************************/

1) 
Using Angular CLI, YARN & NPM

2) 
ng new tgh --skip-tests --routing 
// Skip tests doesn't generate spec files, this is a demo app no unit testing needed 
// Routing setups routing for us we just need to supply the routes 

3)
// Generating components 
ng g c [component-name] --nospec

4)
Component layout brainstorm

Q: Nesting components? 
A: Nah too small of a demo 

Q: Structure? 
A:  Gonna try to draw this out best I can
Home [Main Component]  
 -- Nursing Staff (Users)
  -- Nurse Profile (Individual Nurse)
 -- New Patient Form

Q: Concept to structure above
A: Just a quick demo of a couple of modern priciples in Angular 2
Home page will contain main visual page with 2 links to the nursing staff page where simple
curd is implemented via a 'dummy' userbase from an api. The api is 
located at https://jsonplaceholder.typicode.com . You can click on a nurse to see more of their information 
in their profile, I normally do this via a modal but decided a page approach might be better for this demo.
A new patient form using a reactive form as opposed to a template driven form. If you type in a URL 
that is not found my wildcard redirects you  to a "Not found" page, try it out.   

Q: Services, pipes, directives, etc?
A: Plenty of that, each will be prefixed into a folder_[name] e.g. folder_services

Q: Routing notes? 
A: Basic, hard-coded not dynamic

Q: Additional notes?
A: 
- I usually use Firebase or Laravel (PHP framework) to handle the backend and the database but for this demo I used dummy api calls, i'll see if I fit it in though if I have time 

5) ng serve from the root of the project and were off! Let's install some depenecies in the next chapter 

/********************************/
		    Dependecies 
/********************************/

1) BOOTSTRAP 4 

- npm install bootstrap
- import from node modules 

// I did it this way
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "styles.scss"
]

// Alternatively you  could do it like this in globaly styles.css
@import '~bootstrap/dist/css/bootstrap.min.css';

- Bootstrap JavaScript Components with ngx-bootstrap
npm install ngx-bootstrap --save 

- in app.module.ts import any bootstrap modules you'll use (im adding these as I go)  


TO BE CONTINUED ... 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
