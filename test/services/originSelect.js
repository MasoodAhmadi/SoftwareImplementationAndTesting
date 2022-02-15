const { screenShot } = require("../utils/screenShot");
const OriginSelect = async (variable) => {
  browser.maximizeWindow();
  const { getVarif, flagImage } = variable;
  const getVerificationTitle = await $(getVarif).getText();
  browser.pause(2000);
  screenShot();
  if (getVerificationTitle === getVarif) {
    await $(flagImage).click();
    return true;
  } else {
    await $(flagImage).click();
  }
  screenShot();
  browser.pause(2000);
};
module.exports = { OriginSelect };
