import { MangoCodingChallengePage } from './app.po';

describe('mango-coding-challenge App', function() {
  let page: MangoCodingChallengePage;

  beforeEach(() => {
    page = new MangoCodingChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
