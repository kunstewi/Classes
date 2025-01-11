const os = require('os'); // os module

console.log('Platform:', os.platform());
console.log('CPU architecture:', os.arch());
console.log('Total memory:', os.totalmem());
console.log('Free memory:', os.freemem());

const path = require("path"); // path module

const filePath = "/user/local/bin/file.txt";

console.log(path.basename(filePath)); // file.txt
console.log(path.dirname(filePath)); // /user/local/bin
console.log(path.extname(filePath)); // .txt
