const {readFileSync, writeFileSync} = require('fs');

console.log('start')

const first = readFileSync('./content/content/first.txt', 'utf8')
const second = readFileSync('./content/content/second.txt', 'utf8');


writeFileSync('./content/content/result-sync.txt', 
`Here is th result:
 ${first}, ${second}`,{flag: 'a' });

console.log('done wiht this task')
console.log('starting the next one');