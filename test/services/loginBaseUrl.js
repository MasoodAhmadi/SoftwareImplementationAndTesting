const { screenShot } = require("../utils/screenShot");

screenShot;
const LoginBaseUrl = async (variable) => {
  const { baseUrl } = variable;
  browser.maximizeWindow();
  browser.url(baseUrl);
  screenShot();
  browser.pause(2000);
};
module.exports = { LoginBaseUrl };
