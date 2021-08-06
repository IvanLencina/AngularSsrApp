# AngularSsrTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

## Description

This project was intended to be for testing purposes. I'm only using fetch and geolocation features in order to see the differences between Client side and Server side responsabilities.

## Angular Universal

Angular Universal was installed via:  `ng add @nguniversal/express-engine`

This command installs and configures all the required files.

* After installing this package, if run the app with `ng serve` we inspect the source code, we'll not find our html tags rendered because it stills running in localhost. Our html will be entirely rendered on server side when we deploy the app.

Now we have more commands in the package.json in order to make SSR works. For emaple: First build with `npm run build:ssr` and then: `npm run serve:ssr`

After that if we view the source code, we will see all the content rendered on the document.


* What features run in Client and wich ones in Server side? Here is an link: https://github.com/angular/universal/blob/master/docs/gotchas.md


## Deployment in Firebase Cloud Functions

We cannot use the common used Firebase Hosting, because it provides us a Static files server and we need to run node in order to make the SSR App works.

We need to intall AngularFire because it automatizes the deployment process for us. It adds a command to simplify the process.
Also, this library has a lot of features to implement like Realtime databases, Authentication, and more.

`ng add @angular/fire`

`ng deploy`  <- This command simplifies the process to deploy a SSR Angular app to firebase cloud functions instead of Firebase Hosting.

NOTE: ng deploy, not only makes the deploy. It also builds the production app.


After installing the library, it will add some files and modify others with all the needed configuration.
