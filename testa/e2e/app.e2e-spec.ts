import { TestaPage } from './app.po';

describe('testa App', () => {
  let page: TestaPage;

  beforeEach(() => {
    page = new TestaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
