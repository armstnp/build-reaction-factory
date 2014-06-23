build-reaction-factory
======================

A web application that generates random build success / failure reactions from imgur.  Just an experimental angular app.

Built using the Yeoman [angular-fullstack generator](https://www.npmjs.org/package/generator-angular-fullstack).

Requirements
------------

The following tools were used to develop and run this application:

- [Node.js](http://nodejs.org/) + [npm](https://www.npmjs.org/): Server and Package Manager
- [Yeoman](http://yeoman.io/): Scaffolding
- [Grunt](http://gruntjs.com/): Task Automation
- [Bower](http://bower.io/): JS Dependency Management
- [AngularJS](https://angularjs.org/): Front-end Web Application Framework

Build Instructions
------------------

1. Install the required Javascript dependencies to your local environment: `bower install`
2. Install the required Node.js dependencies to your local environment: `node install`
3. Open up `app/scripts/app.js` and fill in the following values:

    ```
    .constant('SUCCESS_ALBUM_ID', {
        albumId: '[[INSERT IMGUR SUCCESS ALBUM ID HERE]]',
        ...
    
    .constant('FAILURE_ALBUM_ID',
        albumId: '[[INSERT IMGURE FAILURE ALBUM ID HERE]]',
        ...
    
    .constant('INITIAL_BOT_NAME', '[[INSERT GENERATED BOT NAME HERE]]')
    
    .constant('IMGUR_CLIENT_ID', '[[INSERT YOUR OWN IMGUR API CLIENT ID HERE]]')
    ```
    
    (Note that an imgur album ID is the suffix of the album's URL.  For example, the album at http://imgur.com/a/JIARx has an ID of `JIARx`.)
4. Start the server locally: `grunt serve`

Deployment Instructions
-----------------------
1. Build the project for distribution: `grunt build`
(Alternatively, if you wish to validate the distribution build first by running it locally, run `grunt serve:dist`)
2. Follow the instructions provided in the [angular-fullstack documentation](https://www.npmjs.org/package/generator-angular-fullstack) for deployment to either OpenShift or Heroku.

Test Instructions
-----------------

Tests forthcoming...
