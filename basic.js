const { LoginBaseUrl, OriginSelect, ProductDetails, variable } = require(".");

describe("Automation testing with webdriverIO", () => {
  it("A user can open the base URL", async () => {
    await LoginBaseUrl(variable);
  });
  it("A user can select origin of ecommerce", async () => {
    await OriginSelect(variable);
  });
  it("A user can see the Deal of the day", async () => {
    await ProductDetails(variable);
  });
});
