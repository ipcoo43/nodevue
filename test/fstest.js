const fs = require('fs');
// const console = require('console');

// console.log('bbbbbb', __dirname)

fs.readFile(__dirname + '/test.json', 'utf8', (err, data) => {
  if (err) return console.log(err);
  console.log('data>>', data);
});

console.log("-----------------");

const msgfile = __dirname + '/message.txt';
fs.writeFile(msgfile, 'Hello Node.js 세종대왕', (err) => {
  if(err) throw err;
  console.log('The file has been saved');
});

let data2 = fs.readFileSync(msgfile, 'utf8');
console.log('data2>>', data2);

console.log("==================");