import { MyListenifyPage } from './app.po';

describe('my-listenify App', () => {
  let page: MyListenifyPage;

  beforeEach(() => {
    page = new MyListenifyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
