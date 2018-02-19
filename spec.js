// spec.js
describe('Protractor Demo App', function() {
  it('Login to NBL', function() {
    browser.get('https://msmecor.com/app/account#/login');
	browser.driver.manage().window().maximize();
	// Login page Verification 
	var loginPageTitle= browser.getTitle();
   if (loginPageTitle === 'MSM eCOR'){
    return loginPageTitle;
  }else{
    return 'Error';
  }
  console.log('Successfully Verify the login page title');
    element(by.id('username')).sendKeys('nbl');
    element(by.id('password')).sendKeys('msm12!!2017');
    element(by.css('.acc-btn')).click();
	console.log('Successfully Logged in');
   // Dashboard page Verification 
	var dashboardPageTitle= browser.getTitle();
   if (dashboardPageTitle === 'NBL Main Dashboard (Beta) - MSM eCOR'){
    return dashboardPageTitle;
  }else{
    return 'Error';
  }
	console.log('Successfully Verify the Dashboard page title');
	expect(element(by.id('prism-logo')).isPresent()).toBe(true);
	expect(element(by.css('div.nav-item:nth-child(1) > a:nth-child(1)')).getText()).
        toEqual('Home'); 	
	expect(element(by.css('div.nav-item:nth-child(2) > a:nth-child(1)')).getText()).
        toEqual('Pulse'); 	
		// Element exists.
    expect(element(by.css('.fl-bell')).isPresent()).toBe(true);
    expect(element(by.css('.fl-user')).isPresent()).toBe(true);
	console.log('Successfully Verify the Header of Dashboard page');	
    expect(element(by.css('.dashboard-title')).getText()).
        toEqual('NBL Main Dashboard (Beta)'); 
		
  });
});
