import { JwtMockbackendPage } from './app.po';

describe('jwt-mockbackend App', function() {
  let page: JwtMockbackendPage;

  beforeEach(() => {
    page = new JwtMockbackendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
