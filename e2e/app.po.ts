export class NgrxCheckoutPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngrx-checkout-app h1')).getText();
  }
}
