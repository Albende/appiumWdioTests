describe('IOS adding 3 items to the cart', () => {
    it('Add 3 items to the cart', async () => {
      
        await $('//XCUIElementTypeStaticText[@name="Sauce Lab Back Packs"]').click();
        await $('//XCUIElementTypeButton[@name="AddToCart"]').click();
        await $('//XCUIElementTypeOther[@name="ProductDetails-screen"]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeButton').click();
        await $('//XCUIElementTypeStaticText[@name="Sauce Lab Bike Light"]').click();
        await $('//XCUIElementTypeButton[@name="AddToCart"]').click();
        await $('//XCUIElementTypeOther[@name="ProductDetails-screen"]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeButton').click();
        await $('//XCUIElementTypeStaticText[@name="Sauce Lab Bolt T-Shirt"]').click();
        await $('//XCUIElementTypeButton[@name="AddToCart"]').click();
        await $('//XCUIElementTypeOther[@name="ProductDetails-screen"]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeButton').click();

    });
});
