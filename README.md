# AngularSsrTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

## Description

This project was intended to be for testing purposes. We well only use fetching and geolocation features in order to see the differences between Client side and Server side responsabilities.

## Angular Universal

Angular Universal was installed via:  `ng add @nguniversal/express-engine`

This command installs and configures all the required files.

* After installing this package, if run the app with `ng serve` we inspect the source code, we'll not find our html tags rendered because it stills running in localhost. Our html will be entirely rendered on server side when we deploy the app.

Now we have more commands in the package.json in order to make SSR works.


* What features run in Client and wich ones in Server side? Here is an link: https://github.com/angular/universal/blob/master/docs/gotchas.md

