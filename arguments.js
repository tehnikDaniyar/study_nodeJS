const parseArgv = require('minimist');
const args = process.argv.slice(2);

const arguments = parseArgv(args)

console.log(arguments.a);