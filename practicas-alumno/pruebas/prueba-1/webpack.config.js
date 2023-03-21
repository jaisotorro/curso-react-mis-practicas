const commonConfig = require("../../../common/config/webpack.common.js");
const { resolve, join } = require("path");

module.exports = commonConfig(resolve(join(__dirname, "./index.js")));
