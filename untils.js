const fs = require("fs");
const util = require('util');


module.exports = {
    readFile: function(dataPath) {
        const readFile = util.promisify(fs.readFile);
        return readFile(dataPath);
      }
  };