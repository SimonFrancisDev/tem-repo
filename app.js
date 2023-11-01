//npm -global command, comes with node
//npm - verson

//local dependency - use only in a particular project
//npm i <packageNmae>

//global dependency - use it in any project
//npm install -g <packageName>
// sudo install -g <packagName> (mac)


const _ = require('lodash')

const items = [1,[2,[3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);