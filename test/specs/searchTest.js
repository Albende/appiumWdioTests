describe("Search Test", function () {
  it("should go to docs and click Search", async function () {
    
    await driver.url("https://docs.saucelabs.com/");
    await $("/html/body/div[1]/nav/div[1]/div[2]/div[2]/button").click();
    await $("/html/body/div[1]/div/div/header/form/input").click();
    let input = await $("/html/body/div[1]/div/div/header/form/input");
    let elem = await $('.DocSearch-Modal');
    
    await input.setValue("sauce");
    await expect(elem).toExist();


  });
});
