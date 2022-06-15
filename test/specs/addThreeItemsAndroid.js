const { isWebDriverException } = require("wd/lib/utils");

describe('Android adding 3 items to the cart', () => {
    it('Add 3 items to the cart', async () => {
      
        await $('(//android.widget.TextView[@content-desc="store item text"])[1]').click();
        await $('//android.view.ViewGroup[@content-desc="Add To Cart button"]').click();
        await driver.back();
        await $('(//android.widget.TextView[@content-desc="store item text"])[2]').click();
        await $('//android.view.ViewGroup[@content-desc="Add To Cart button"]').click();
        await driver.back();
        await $('(//android.widget.TextView[@content-desc="store item text"])[3]').click();
        await $('//android.view.ViewGroup[@content-desc="Add To Cart button"]').click();
        await $('//android.view.ViewGroup[@content-desc="cart badge"]').click();
        let element = await $('/hierarchy/android.widget.FrameLayout');
        await element.isDisplayed();

    });
}); 