import { PipesAppPage } from './app.po';

describe('pipes-app App', () => {
  let page: PipesAppPage;

  beforeEach(() => {
    page = new PipesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
