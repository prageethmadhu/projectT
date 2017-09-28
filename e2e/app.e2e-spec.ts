import { MyTProjPage } from './app.po';

describe('my-tproj App', () => {
  let page: MyTProjPage;

  beforeEach(() => {
    page = new MyTProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
