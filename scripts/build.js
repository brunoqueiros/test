var fs = require('fs');

fs.createReadStream('./src/index.js').pipe(fs.createWriteStream('index.js'));
