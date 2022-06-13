describe('Should Add 3 items to the cart', () => {
    it('Add 3 items to the cart', async () => {
      
        await $('(//android.widget.TextView[@content-desc="store item text"])[1]').click();
        for (let i = 0; i < 2; i++) {
            await $('//android.view.ViewGroup[@content-desc="counter plus button"]/android.widget.ImageView').click();
            
        }
        await $('//android.view.ViewGroup[@content-desc="Add To Cart button"]/android.widget.TextView').click();
        await $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView').click();
        await $('//android.view.ViewGroup[@content-desc="Proceed To Checkout button"]/android.widget.TextView');
        


    });
});
