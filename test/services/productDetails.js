const { screenShot } = require("../utils/screenShot");

screenShot;
const ProductDetails = async (variable) => {
  const {
    closeButton,
    productButton,
    itemClick,
    itemDetials,
    itemDetialsProduct,
    cartBox,
  } = variable;
  screenShot();
  $(closeButton).click();
  browser.pause(4000);

  await $(productButton).click();
  screenShot();

  await $(itemClick).click();
  browser.pause(3000);
  await $(itemDetials).click();
  // await $(itemDetialsProduct).click();
  // await $(anotherItemClick).click();
  // await $(cartBox).click();
  browser.pause(3000);
  screenShot();
};
module.exports = { ProductDetails };
