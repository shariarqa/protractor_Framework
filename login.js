describe('describe some test', function() {

  it('describe some step', function() {
    $('.username').sendKeys(browser.params.login.email);
    $('.password').sendKeys(browser.params.login.password);
  });
});

