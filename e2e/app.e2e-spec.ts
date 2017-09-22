import { BevPage } from './app.po';

describe('bev App', () => {
  let page: BevPage;

  beforeEach(() => {
    page = new BevPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
