describe('Protractor baby steps',function () {

    it('Open Angular JS Website',function () {

        browser.get('http://angularjs.org');

        browser.get('http://delta.com');

        browser.sleep(5000);

        console.log("Im the last one");


    })

})