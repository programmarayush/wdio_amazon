import {browser , expect } from '@wdio/globals';

describe('Amazon Home Page',  () => {
  it('Access and verify url and title', async () => {
    await browser.url("/");
    await expect(browser).toHaveUrlContaining('amazon');
    await expect(browser).toHaveTitleContaining('Amazon.com.');
    await browser.pause(4000);
  });
   it('Search Content and Verify Text', async () => {
    const ExpectedText = $('.a-color-state.a-text-bold')
    const SearchBar = $('#twotabsearchtextbox');
    const searchText = "macbook";
    await $('#twotabsearchtextbox').setValue(searchText);
    
    await browser.keys('ArrowDown');
    await browser.keys('Enter');
    // await $("input[id='nav-search-submit-button']").click();
    await expect (ExpectedText).toHaveTextContaining('macbook');
    await browser.pause(2000);

   });
   
});

