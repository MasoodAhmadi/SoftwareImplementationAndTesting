const variable = require("./conf.json");
const { LoginBaseUrl } = require("./test/services/loginBaseUrl");
const { OriginSelect } = require("./test/services/originSelect");
const { ProductDetails } = require("./test/services/productDetails");

module.exports = { LoginBaseUrl, OriginSelect, ProductDetails, variable };
