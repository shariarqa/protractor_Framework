describe('Actions demo',()=>{


    function OpenWebsite(){
        browser.get('http://posse.com/');

        browser.manage().window().maximize();
    }

    function MouseOver(ele, location){

        browser.actions().mouseMove(element(by.model(ele))).sendKeys(location).perform();

    }

    function arrowDown(){

        browser.actions().sendKeys(protractor.Key.ARROW_DOWN);
    }


    it('Open Posse Website', ()=>{

        OpenWebsite();

        element(by.model("userInputQuery")).sendKeys("river");

        browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform().then(function(){

            browser.sleep(5000);


        });

        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform().then(function(){

            browser.sleep(5000);


        });

        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {

            browser.sleep(5000);

            expect(element.all(by.css("div[ng-mouseover*='onSerachResultOver']")).count()).toEqual(7);

        })


    })

})