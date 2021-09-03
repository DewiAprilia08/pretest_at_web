import { When, Then ,Given } from 'cucumber';
import login from '../pageobjects/login';

Given(/^a web browser is in Bukalapak homepage$/, () => {
    login.openHomePage();
});

When(/^user click login button in homepage$/, () => {
    login.clickHPLogin();
});

Then(/^user redirect to url '([^"]*)'$/, (url) => {
    login.urlEquals(url);
});

Then(/^user view login page$/, () => {
    login.viewLoginPage();
});

When(/^user input email '([^"]*)'$/, (userEmail) => {
    login.inputUserEmail(userEmail);
});

When(/^user click lanjut button$/, () => {
    login.clickLanjut();
});

When(/^user input password '([^"]*)'$/, (userPassword) => {
    login.inputUserPassword(userPassword);
});

When(/^user click login button$/, () => {
    login.clickLogin();
});

Then(/^user login success$/, () => {
    login.successLogin();
});

Then(/^user view error message$/, () => {
    login.errorMessage();
});

