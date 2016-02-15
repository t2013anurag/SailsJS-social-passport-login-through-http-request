# Social

a [Sails](http://sailsjs.org) application

# Sails.js Social Auth example using HTTP Get Request to your server.

## Requirements

- [sails](http://sailsjs.org/) >= 0.10.4
- node >= 0.10.0
- MongoDB

## Setup

1. Clone the repository `git clone https://github.com/t2013anurag/SailsJS-social-passport-login-through-http-request.git`
1. Navigate into the directory `cd sails-social-auth-example`
1. Run `npm install`  to install the dependencies
1. Set up your MongoDB settings `config/connections.js`
1. Start your MongoDB from the command line with `sudo mongod`
1. Set up your strategies
   - [Google+](#google)
   - [Facebook](#facebook)   
1. Start sails with `sails lift`
1. Open `http://localhost:1337` in your browser

## Available authentication strategies

### Google+
1. Create a new app [here](https://cloud.google.com/console#/project)
   - Name ```sails-social-auth-example```
   - URL ```http://localhost:1337```
   - Callback URL ```http://localhost:1337/auth/google/callback```
1. In the `config/middleware.js` replace `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` with the generated keys


### Facebook

1. Create a new app [here](https://developers.facebook.com/apps)
   - Name ```sails-social-auth-example```
   - URL ```http://localhost:1337```
   - Callback URL ```http://localhost:1337/auth/facebook/callback```
1. In the `config/middleware.js` replace `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` with the generated keys




## License

The MIT License (MIT)



Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
