#! /usr/bin/env node
const args = process.argv.slice(2);
if (args.length < 2){
    console.error("Please enterat least 2 numbers");
    process.exit(1);
}

const total = args.reduce((previous, current) => parseFloat(current) * parseFloat(previous))

if (isNaN(total)) {
    console.error("One or more arguments are not numbers");
    process.exit(1);
}

console.log(total);
process.exit(0);