import {browser , expect, $} from '@wdio/globals';

describe('Cart Flow', async () => {
    before(async () => {
        // await browser.url('/');
        const SearchBar = await $('#twotabsearchtextbox');
        const SearchButton = await $('#nav-search-submit-button');
        await SearchBar.setValue('macbook');
        await SearchButton.click();
    })
    });
    it('Add to Cart', async () => {
        const Product = await $('a-size-medium a-color-base a-text-normal');
        const CartPrice = (await $('#corePrice_desktop span[class="a-price a-text-price a-size-medium apexPriceToPay')).getText();
       const AddToCartButton = await $('#add-to-cart-button');
        await AddToCartButton.click();
        await $('#attachSiNoCoverage-announce').click();
        const SuccessMessage= await $("h1[class='a-size-medium-plus a-color-base sw-atc-text a-text-bold']").getText();
        await expect(SuccessMessage).toEqual('Added to Cart');
    
}
  )