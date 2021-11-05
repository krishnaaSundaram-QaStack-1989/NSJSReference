# Description

This project is a single page app that has two configurations controlled by config.js
One configuration (window.MODE='DWM') causes the app to provide all dark web monitoring features for an authenticated Norton user.
The other configuration (window.MODE='DSP') causes the app to provide all identity monitoring features for an authenticated Norton user,
corresponding to their plan level.

---
# Setup for Macbooks

### Install dependencies
    brew install watchman
    npm install grunt-cli -g
    git clone ssh://git@stash.lifelock.com:7999/mw/dsp.git
    npm install

### Set up /etc/hosts file
  - Be sure your VPN is off before editing the following so your changes are not over-written
  - Edit the hosts file: sudo vi /etc/hosts
    - Add an entry in the file: 
      > 127.0.0.1 local-ngp.norton.com

    - Add an entry in the file:
      > 127.0.0.1 local.darkwebmonitoring.lifelock.com

    - Save and close the hosts file

### Add certs to your Mac keychains
  - Open the Mac Keychain Access app
  - Select the "login" keychain, and the "Certificates" category.
  - Then use the Mac Finder app to open your dsp folder and drag test/ssl/cert.pem and test/ssl/local-ngp.norton.com.crt into the Certificates list.
  - Select the "System" keychain, and the "Certificates" category.
  - Then use the Mac Finder app to open your dsp folder and drag test/ssl/cert.pem and test/ssl/local-ngp.norton.com.crt into the Certificates list.

### Set up apache server to host static files
  - Edit the httpd conf file: sudo vi /etc/apache2/httpd.conf
    - uncomment all of these lines: 
      > Include /private/etc/apache2/extra/httpd-userdir.conf
      >
      > LoadModule userdir_module libexec/apache2/mod_userdir.so
      >
      > Include /private/etc/apache2/extra/httpd-ssl.conf
      >
      > LoadModule socache_shmcb_module libexec/apache2/mod_socache_shmcb.so
      >
      > LoadModule ssl_module libexec/apache2/mod_ssl.so
      >
      > Include /private/etc/apache2/extra/httpd-vhosts.conf

    - save and close httpd.conf

  - edit the conf file: sudo vi /private/etc/apache2/extra/httpd-userdir.conf
    - uncomment the line: 
      > Include /private/etc/apache2/users/*.conf
    
    - save and close httpd-userdir.conf

  - edit your apache user file: sudo vi /etc/apache2/users/[your user name].conf
    look at the test/apache_configs/test_user.conf file in this project for an example of what to put in the user file
    make sure you replace YOUR_USER_NAME_GOES_HERE with your own user name

  - edit the conf file: sudo vi /private/etc/apache2/extra/httpd-ssl.conf
    comment out all of the lines between [VirtualHost] and [/VirtualHost] inclusive
    Ensure this line is uncommented : Listen 443
    save and close httpd-ssl.conf

  - edit the conf file: sudo vi /private/etc/apache2/extra/httpd-vhosts.conf
    look at the test/apache_configs/httpd-vhosts.conf file in this project for an example of what to put in the vhosts file

  - check for config errors: sudo apachectl configtest

  - If you come across this error: "Could not reliably determine the server's fully qualified domain name, using 127.0.0.1. Set the 'ServerName' directive globally to suppress this message", then
    - Add the following to /etc/hosts file too:
        > 127.0.1.1     localhost
        > 127.0.0.1     localhost
        > ...
    - Also edit conf file:  sudo vi /private/etc/apache2/httpd.conf
       make sure ServerName is uncommented and add : ServerName localhost
       save and close httpd.conf
       
  - restart apache: sudo apachectl restart

  - in your browser, go to: https://local-ngp.norton.com/~[your user name]
    verify you are seeing a list of files for your user directory - if not, do the next step
    make the Sites directory if necessary: cd ~/ && mkdir Sites
    

### Symlink parent html files to load this project into an iframe
  - You should now have an apache server that serves up files in your user directory ~/Sites

  - go to ~/Sites

    - run: ln -s [path to this project]/test/testiframe.html ./testiframe.html

    - run: ln -s [path to this project]/test/iframeListeners.js ./iframeListeners.js

    - run: ln -s [path to this project]/test/NGP ./NGP
    
    - run: ln -s [path to this project]/test/testSendSso.html ./testSendSso.html

  - in your browser, go to: https://local-ngp.norton.com/~[your user name]/testiframe.html and accept any security warnings.


  - If you see a forbidden error when accessing the files in your browser, make sure the parent directories of those files have execute privileges for the apache user.


### Build the project
    See build process instructions below

### Run the project
    See run instructions below

### Verify you are seeing alerts
    Refresh https://local-ngp.norton.com/~<your user name>/testiframe.html   
    Make sure you see alerts show up.

---
# Run

### Runs the project in https mode, listening on port 3000 
1. npm run httpsStart
2. (first time setup) visit https://local.darkwebmonitoring.lifelock.com:3000 in your browser of choice, and accept any security warnings. Otherwise your iframe will not load correctly.
3. (first time setup) visit https://local.darkwebmonitoring.lifelock.com and accept any security warnings.  
4. (first time setup) visit the https url for your local member-api and accept any security warnings
5. If you see a "You are logged out message" appear, you must open a new tab and log into my-int.norton.com using a test account such as testingnortonsso@yopmail.com / Test1@LL   Then go back to the app tab and refresh the page.  This is because the app expects NGP to handle logins and leverages the my-int norton login system.

---
# Build process to create bundle files and populate the /build folder

### The following automatically sources .env.production before running the build
1. npm run build

---
# Rebuild tailwind css after changing config

### The following rebuilds the index.css file using tailwind.config.js
1. ./node_modules/.bin/tailwind build src/css/index.css 

---
# Checking bundle size (after creating a build)

1. node bundleReport.js

---
# Run Unit Tests

1. npm test
2. Look at the snapshot generated in the __snapshots__ directory in the same location as the unit test file
3. Make sure the snapshot content looks correct. Update your test if the snapshot content needs to be fixed.
4. Commit your unit test changes and the updated snapshot file.

---
# See Unit Test Code Coverage
* npm run coverage

---
# Troubleshooting
* Are you running node 10.16.0 or later?
* Are you running npm 6.4.1 or later?
* Are you on LifeLock VPN with access to LifeLock data apis?
* Did you run 'git pull'?
* Did you run 'npm install'?
* If you are not able to access a url, did you check /etc/hosts, check the apache configs, and accept security cert in Chrome? 
* If you get "id_token issued in the future" error on MemberAPI, try logging into Norton following the flow #1-4 from: https://wiki.lifelock.com/display/MWP/DSP%3A+Authentication+flow+for+automation

---
# Writing Tests
* We use the expect syntax from jest: https://facebook.github.io/jest/docs/en/expect.html
* Use "console.log(wrapper.debug())" to help debug your wrapper calls

---
# Storybook Testing
* To install storybook: 
    - npm i -g @storybook/cli
* To run storybook: 
    - npm run storybook
    - npm run watch-css (In case you wish the live changes to src/styles/index.css to reflect in src/css/index.css)
    - Open browser to http://localhost:9009/
* To view code behind storybooks:
    - Open src/stories/index.js
* Learn more at: https://github.com/storybooks/storybook
* Other great resources: https://github.com/merchedhq/awesome-tailwindcss
    
---
# Run Functional Tests
* npm install nightwatch (first time setup)
* command to run a test-   npm run functional-dev  (or)  node_modules/.bin/nightwatch test/functional/test/smokeTests/loginSmokeTest.js --config nightwatch.json --env dsp_dev_env
* in above command loginSmokeTest.js is the name of the test.
* to run test suite  - node_modules/.bin/nightwatch --group test/functional/test/smokeTests --config nightwatch.json --env dsp_dev_env

# References
* To get a test norton account that has been enrolled in Lifelock, run a test enrollment.  TODO: add instructions
* To get a test jwt payload from dev NSL, go to https://pingo7.azurewebsites.net/espa/svelte/ and log in with a test norton account that has been enrolled in Lifelock.
* To obtain a norton account guid, examine the jwt payload from dev/stage NSL, use https://jwt.io/
* To log into LifeLock oauth using the norton account guid, send a POST request to https://int1-app-oauth.dev.aws.lifelock.com/authserver/v2/oauth/token?grant_type=password with body x-www-form-urlencoded parameters: partnerCode = SYMC , partnerMemberId = the norton account guid of the test member 
curl -X POST \
  'https://int1-app-oauth.dev.aws.lifelock.com/authserver/v2/oauth/token?grant_type=password' \
  -H 'authorization: Basic bWVtYmVyd2ViYXBwOm1lbWJlcndlYmFwcA==' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -H 'postman-token: a2fe3a5f-7852-762f-e418-e3d2dfe95d37' \
  -d 'partnerCode=SYMC&partnerMemberId=92811531637906940726144567883066928' 
* To get the member id, use the strong token (jwt access token) from the above step and curl the following url to get the member id.
curl -X GET \
  https://int1-da-as.dev.aws.lifelock.com/dataapi-1.0/account/ \
  -H 'authorization: Basic bWVtYmVyd2ViYXBwOm1lbWJlcndlYmFwcA==' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 79bdfd77-6ce8-c5d5-4e11-cd2f7257725e' \
  -H 'token: strong_token'
* To create an alert for a given member id, use RunAlertUtilCommandLine.js in https://stash.lifelock.com/projects/MW/repos/memberportal/browse/test/functional/src/Utils

