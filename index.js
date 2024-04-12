var fs = require('node:fs');
var path = require('node:path');

function mfalade() {
    var absoluteFilePath = path.join(__dirname, 'info.json');
    fs.readFile(absoluteFilePath, 'utf8', function (error,data) {
      if (error) {
        return console.error(error);
      }
      console.log(data);
    });
}

module.exports = mfalade
