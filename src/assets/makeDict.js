const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'dict.txt'), 'utf-8');
const dataArr = data.split('\n');
fs.writeFileSync(
  path.join(__dirname, 'dict.json'),
  JSON.stringify(dataArr),
  'utf-8',
);
