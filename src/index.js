const urlMd5 = require("url-md5");

urlMd5.config.pathRewriter = function (pathname, raw) {
    return (raw.method || "get").toUpperCase() + pathname.replace("/fu/api", "");
}

module.exports = {
    encode: function (options) {
        return urlMd5.encode(options);
    },
    setSalt: function (salt) {
        urlMd5.config.salt = salt;
    }
}