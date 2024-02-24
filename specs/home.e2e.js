import {browser , expect, $} from '@wdio/globals';

describe('Amazon Home Page',  () => {
  it('Access and verify url and title', async () => {
    await browser.url("/");

    browser.dismissAlert()
    await expect(browser).toHaveUrlContaining('amazon');
    await expect(browser).toHaveTitleContaining('Amazon.com');
    await browser.pause(4000);
  });
   it('Search Content and Verify Text', async () => {   
    await browser.pause(2000);
    const SearchBar = await $('#twotabsearchtextbox');
    await browser.pause(1000);
    await expect(SearchBar).toBeDisplayed();
    await SearchBar.click();
    const searchText = "macbook";
    await SearchBar.setValue(searchText);
    await browser.keys('Enter');
    const expectedText = await $('.a-color-state.a-text-bold');
    browser.pause(5000);
    // await $("input[id='nav-search-submit-button']").click();
    await expect (expectedText).toHaveTextContaining(searchText);
    await browser.pause(2000);

   });
   
});

