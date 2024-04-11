var fs = require('fs');

function mfalade() {
    fs.readFile('./info.json', 'utf8', function (error,data) {
      if (error) {
        return console.log(error);
      }
      console.log(data);
    });
}

module.exports = mfalade