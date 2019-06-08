describe('Protractor Element Demo', function() {

	function Add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);

		element(by.id("gobutton")).click();
	}


	function cal (a,b,c){

		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);

		element.all(by.tagName('option')).each((item)=>{


			item.getAttribute('value').then((value => {


				if(value==c){
					item.click();
				}
			}))

		})

	}




	it('Locators', function() {

		browser.get('http://juliemr.github.io/protractor-demo/');

		Add(2,3);
		Add(3,3);
		Add(4,3);
		Add(4,3);




		element(by.repeater("result in memory")).element(
				by.css("td:nth-child(3)")).getText().then(function(text) {

			console.log(text);

		});

		//  element(by.xpath("//h2[@class='ng-binding']")).getText().then(function(result) {

		//       console.log(result);

		// })

		element.all(by.repeater("result in memory")).count().then(function(count) {

					console.log(count)

		});

		element.all(by.repeater('result in memory')).get(2).element(by.css("td:nth-child(3)")).getText().then((result)=>{

			console.log(result)
		})

		element.all(by.repeater('result in memory')).get(0).getText().then((result)=>{

			console.log(result)
		})

		browser.sleep(2000);
		cal(6,2,"DIVISION")

		browser.sleep(2000);



    })

});