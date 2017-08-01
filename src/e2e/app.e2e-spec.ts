import { FriendsPage } from './app.po';

describe('friends App', () => {
  let page: FriendsPage;

  beforeEach(() => {
    page = new FriendsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
