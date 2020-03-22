M - MongoDB
E - Express
A - Angular
N - Node

###Installation

 - run npm start
   - to test/build Angular changes, nav to angular-src folder and run ng serve
   - when changes are complete, run ng build to build into public folder of project

###Dependencies & Technologies

- Cors (Cross-origin resource sharing)
: Middleware that allows you to make a request from a different domain name.
"a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served"

- Express
: Modular web application framework; Node standard as of 2020

- Mongoose
: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB

  - ORM is Object Relational Mapping, which is to map an object with a relational world. ... ODM on the other hand is an Object Document Mapper, which maps objects with a Document Database like Mongo. The main difference is that ORM is for MySQL databases, while ODM does the mapping for document representation of data
  
- bcryptjs
: bcryptjs lets you hash your passwords means it convert your password to a random string

- jsonwebtoken
: An implementation of JSON Web Tokens.
  - JSON Web Token (JWT) is a compact, URL-safe means of representing
       claims to be transferred between two parties.  The claims in a JWT
       are encoded as a JSON object that is used as the payload of a JSON
       Web Signature (JWS) structure or as the plaintext of a JSON Web
       Encryption (JWE) structure, enabling the claims to be digitally
       signed or integrity protected with a Message Authentication Code
       (MAC) and/or encrypted.
       
- body-parser
: Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

- passport
: Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

- passport-jwt
: A Passport strategy for authenticating with a JSON Web Token. This module lets you authenticate endpoints using a JSON web token. It is intended to be used to secure RESTful endpoints without sessions.

- ~~Angular 2~~ Angular 6
: Angular is a typescript based open-source web application framework.
Updates to Angular 2 flash messages required Angular 6,
upgrading dependencies
  - HttpHeaders instead of Headers
  - @auth0/angular-jwt instead of Angular2-jwt

- Angular 2 flash messages
: used to display flash messages

- Angular Services (Validate, auth)
: used to fetch data for components
  - https://angular.io/tutorial/toh-pt4#why-services

- Bootswatch
: pre-made bootstrap themes to base ui off of
  - https://bootswatch.com/

- Bootstrap
: https://getbootstrap.com/docs/4.4/examples/

- ~~Angular2-JWT~~ @auth0/angular-jwt
: utilized to interact with JSON web tokens. Upgraded to be compatible with Angular 2
  - https://github.com/auth0/angular2-jwt#usage-injection