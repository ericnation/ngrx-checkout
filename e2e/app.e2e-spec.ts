import { NgrxCheckoutPage } from './app.po';

describe('ngrx-checkout App', function() {
  let page: NgrxCheckoutPage;

  beforeEach(() => {
    page = new NgrxCheckoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
