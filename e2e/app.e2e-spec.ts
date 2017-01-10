import { MovieMatePage } from './app.po';

describe('movie-mate App', function() {
  let page: MovieMatePage;

  beforeEach(() => {
    page = new MovieMatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
