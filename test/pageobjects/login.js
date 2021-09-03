/* eslint-disable no-undef */
// import { toPlainObject } from 'lodash';
import Page from './page';

class login extends Page {

    get HPLogin() { return $('.te-header-login'); }
    get inputEmail() { return $('#user_identity_textfield'); }
    get btnLanjut() { return $('#submit_button'); }
    get inputPassword() { return $('#input-password'); }
    get btnLogin() { return $('#btn-login'); }
    get imgAvatar() { return $('.bl-avatar.sigil-avatar'); }
    get errorMsg() { return $('.bl-text--error'); }

    /* LINK
        https://accounts.bukalapak.com/login
        https://accounts.bukalapak.com/register?from=agentregister
        https://www.bukalapak.com/password_resets/new
        https://accounts.bukalapak.com/register?from=leftlogin
        https://www.bukalapak.com/users/request_email_resend
    */

    openHomePage() {
        super.open(`${browser.options.baseUrl}`);
        browser.pause(5000);
    }

    urlEquals(url) {
        browser.pause(5000);
        super.urlShouldEquals(url);
    }

    clickHPLogin(){
        super.clickElement(this.HPLogin);
        browser.pause(5000);
    }

    viewLoginPage(){
        super.elementShouldDisplayed(this.inputEmail);
    }

    inputUserEmail(userEmail){
        super.elementShouldDisplayed(this.inputEmail);
        super.inputElement(this.inputEmail, userEmail);
    }

    clickLanjut(){
        super.elementShouldDisplayed(this.btnLanjut);
        super.clickElement(this.btnLanjut);
    }

    inputUserPassword(userPassword) {
        super.elementShouldDisplayed(this.inputPassword);
        super.inputElement(this.inputPassword, userPassword);
    }

    clickLogin() {
        super.clickElement(this.btnLogin);
        browser.pause(5000);
    }

    successLogin() {
        super.elementShouldDisplayed(this.imgAvatar);
    }

    errorMessage(){
        super.elementShouldDisplayed(this.errorMsg);
    }
}

export default new login();

