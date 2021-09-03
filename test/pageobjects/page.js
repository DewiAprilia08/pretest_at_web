import { expect } from 'chai';
/* eslint-disable no-undef */
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

const timeout = 60000;

export default class Page {
  open(path) {
    browser.url(path);
  }

  waitElementDisplayed(element) {
    if (!element.isDisplayed()) {
      element.waitForDisplayed({timeout});
    }
  }

  waitElementExist(element) {
    if (!element.isExisting()) {
      element.waitForExist({timeout});
    }
  }

  clickElement(element) {
    this.waitElementDisplayed(element);
    element.click();
  }

  inputElement(element, value) {
    this.waitElementDisplayed(element);
    element.clearValue();
    element.setValue(value);
  }

  urlShouldEquals(value) {
    browser.getUrl().should.equals(value);
  }

  urlShouldContains(value){
    browser.getUrl().should.to.include(value);
  }

  isElementDisplayed(element) {
    this.waitElementDisplayed(element);
    return element.isDisplayed();
  }

  elementShouldDisplayed(element) {
    this.isElementDisplayed(element).should.be.true;
  }

  elementShouldHaveText(element, text) {
    const res = this.getElementText(element);
    expect(res).equals(text);
  }

  elementShouldContainText(element, text){
    const res = this.getElementText(element);
    expect(res).to.include(text);
  }

  elementShouldHaveAttributeValue(element, attributeName, value) {
    this.waitElementDisplayed(element);
    const res = this.getAttributeValue(element, attributeName);
    expect(res).to.include(value);
  }

  switchWindowViaUrl(url){
    browser.waitUntil(
      () => browser.switchWindow(url),
      {
        timeout: timeout,
        timeoutMsg: 'expected window to be show after 10s',
      }
    )
  }

  getAttributeValue(element, attributeName) {
    return element.getAttribute(attributeName);
  }

}
