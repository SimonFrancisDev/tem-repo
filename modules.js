// modules
const names = require('./names');
const sayHi = require('./utils');
const data = require('./alternative-flavour');
require('./mind-grenade');
sayHi('Francis')
sayHi(names.john);
sayHi(names.peter);


const os = require('os')

//info about current user

const user = os.userInfo()
console.log(user);

// method reyurns the sytem uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOs);
