


describe('Enter name freature', function()
{
    it('should enter name as Tom', function()

    {   

        browser.get('https://angularjs.org');

        element(by.model('yourName')).sendKeys('Tom');
        var text = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));

        expect(text.getText()).toEqual('Hello Tom!');

    });

});

describe('free crm title test', function()
{
    it('get title test', function()
    {

        browser.get('https://www.delta.com/');
        //var title = expect(browser.getTitle());
        expect(browser.getTitle().toEqual('Airline Tickets & Flights: Book Direct with Delta Air Lines - Official Site'));
        //console.log(title);
        
    });

});