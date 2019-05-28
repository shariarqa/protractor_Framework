exports.config = {
framework:'jasmine',
//seleniumAddress: 'http://localhost:4444/wd/hub', 
specs:['Actions.js']
}
/*
capabilities: {
	  browserName: 'chrome',

	  chromeOptions: {
	     args: [ "--headless", "--disable-gpu", "--window-size=1920,1080" ]
	   }
}


params: {
    login: {
      username: 'default',
      password: 'default'
    }
  }

};


/*
Now, instead of using hard coded values, Protractor will use what is provided in the config file unless the user changes those values via the command line when running the spec file.
To do this, add these flags to your protractor call:

protractor conf.js --parameters.login.email=example@gmail.com 
--parameters.login.password=foobar

https://www.linkedin.com/pulse/ui-automation-protractor-based-page-object-pattern-rohit-negi

*/

