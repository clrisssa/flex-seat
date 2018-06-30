import { FlexSeatPage } from './app.po';

describe('flex-seat App', () => {
  let page: FlexSeatPage;

  beforeEach(() => {
    page = new FlexSeatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
