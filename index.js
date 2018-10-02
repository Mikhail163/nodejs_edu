const ansi = require('ansi');
const cursor = ansi(process.stdout);

cursor.hex('#000000').bold();

console.log('Hello ');

cursor.hex('#ff0000').bold();

console.log('world');

cursor.beep();