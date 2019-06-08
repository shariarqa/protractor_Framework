

describe('multiple scenarios', function () {

    var head = element(by.xpath("//div[@class='h1 promo-header-title']"));




    beforeEach(function () {

        browser.get('https://www.delta.com/');
        browser.sleep(5000);

    });

        it('should have title', function(){


            expect(browser.getTitle()).toEqual('Airline Tickets & Flights: Book Direct with Delta Air Lines - Official Site');


        });


        it('should have headline', function(){
        
         var info = head.getText();
        expect(head.getText()).toEqual('Delta Premium Select');
            console.log(info);

        });


});

