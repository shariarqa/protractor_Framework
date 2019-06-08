import {browser, ExpectedConditions} from "protractor";

var Helper = function (){

    this.waitForElement = function(element){
        return browser.wait(()=> (element.isPresent()),60000 );
        
    }

    this.waitForElementDisplayed = function(element){
        return browser.wait(()=> (element.isDisplayed()),60000 );
        
    }

    this.sleep = function(){
        browser.sleep(time);
       
    }


    this.waitForElementVisibility = function(element){
        let EC = ExpectedConditions;
        let condition = EC.visibilityOf(element);
        browser.wait(condition, 3000);
    }
}

module.exports = new waitHelper();