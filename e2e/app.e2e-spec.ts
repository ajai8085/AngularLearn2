import { MyExpenseAppPage } from './app.po';

describe('my-expense-app App', function() {
  let page: MyExpenseAppPage;

  beforeEach(() => {
    page = new MyExpenseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
