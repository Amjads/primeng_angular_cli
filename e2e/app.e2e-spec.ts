import { PrimengCliPage } from './app.po';

describe('primeng-cli App', function() {
  let page: PrimengCliPage;

  beforeEach(() => {
    page = new PrimengCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
