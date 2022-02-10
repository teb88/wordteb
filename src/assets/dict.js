import fs from 'fs';
import path from 'path';

const dict = JSON.parse(
  fs.readFileSync(
    path.resolve(process.cwd(), 'src/assets', 'dict.json'),
    'utf-8',
  ),
);

export default dict;
